import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Loader2, Send, TriangleAlert } from 'lucide-react';
import { submitContactMessage, type ContactMessage } from '@/lib/contactService';

type FormErrors = Partial<Record<keyof ContactMessage, string>>;
type SubmitStatus = 'idle' | 'submitting' | 'demo';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY_FORM: ContactMessage = { name: '', email: '', message: '' };

function validateContactForm(values: ContactMessage): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address, such as name@example.com.';
  }
  if (!values.message.trim()) errors.message = 'Please write a short message.';
  return errors;
}

const inputBase =
  'w-full rounded-2xl border bg-midnight/60 px-4 py-3.5 text-base text-ink placeholder:text-ink-subtle outline-none transition duration-300 focus:border-aurora-cyan/70 focus:bg-midnight focus:ring-4 focus:ring-aurora-cyan/15';

export default function ContactForm() {
  const [values, setValues] = useState<ContactMessage>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const updateField = (field: keyof ContactMessage) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === 'demo') setStatus('idle');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    setStatus('submitting');
    const result = await submitContactMessage();
    setStatus(result.delivered ? 'idle' : 'demo');
    if (result.delivered) setValues(EMPTY_FORM);
  };

  const isSubmitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="glass relative p-7 sm:p-10" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-2xl sm:text-3xl">
        Send a message
      </h3>

      <div className="mt-8 space-y-6">
        <Field id="name" label="Full Name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={updateField('name')}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${inputBase} ${errors.name ? 'border-rose-400/60' : 'border-white/10'}`}
          />
        </Field>

        <Field id="email" label="Email Address" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={updateField('email')}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${inputBase} ${errors.email ? 'border-rose-400/60' : 'border-white/10'}`}
          />
        </Field>

        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={updateField('message')}
            placeholder="A little about the opportunity or project..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`${inputBase} resize-y ${errors.message ? 'border-rose-400/60' : 'border-white/10'}`}
          />
        </Field>
      </div>

      {status === 'demo' && (
        <div
          role="status"
          className="mt-6 flex gap-3 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100"
        >
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <p>
            Demo mode: Your message has not been sent. A submission service needs to be configured to enable this feature.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary group mt-8 w-full disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Preparing message...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4 transition duration-500 group-hover:translate-x-0.5" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label} <span className="text-cyan-300" aria-hidden="true">*</span>
        <span className="sr-only">(required)</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}
