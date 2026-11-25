export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmissionResult {
  delivered: boolean;
}

// Front-end only: nothing is sent. To enable real delivery, accept the message here,
// send it to your submission service, and return { delivered: true } on success.
export async function submitContactMessage(): Promise<ContactSubmissionResult> {
  return { delivered: false };
}
