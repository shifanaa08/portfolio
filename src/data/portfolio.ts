/*
 * Central content for the portfolio. Edit text, skills, projects and links here.
 *
 * PROJECT LINKS: every link that still starts with "#replace-" is treated as
 * not configured and shows a "Link coming soon" label instead of a real link.
 * Replace each placeholder with the full URL, e.g. https://github.com/you/repo
 */

export interface HeadlineParts {
  before: string;
  highlight: string;
  after: string;
}

export const personal = {
  name: 'Shifana',
  brand: 'SHIFANA.',
  monogram: 'S',
  eyebrow: 'Software Engineer / Full Stack Developer',
  headline: {
    before: 'Building ',
    highlight: 'thoughtful digital experiences',
    after: ' through code.',
  } satisfies HeadlineParts,
  title: 'Software Engineer | Full Stack Developer',
  intro:
    "Hello, I'm Shifana — a Full Stack Developer passionate about building modern, practical web applications. I work across frontend and backend technologies, combining clean interfaces, reliable functionality, and emerging AI capabilities to create meaningful digital experiences.",
  location: 'Mangalore, India',
  techLine: ['React.js', 'Next.js', 'Node.js', 'Flask', 'MySQL'],
  email: 'fathimashifaa08@gmail.com',
  phone: '9980553049',
  github: 'https://github.com/shifanaa08',
  // Place the real resume at public/Shifana-Resume.pdf (see README).
  resumePath: '/Shifana-Resume.pdf',
  heroLabels: ['REACT.JS', 'NODE.JS', 'PYTHON', 'AI / ML'],
} as const;

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

export const about = {
  eyebrow: 'A little about me',
  headline: "Technology is more than code. It's about solving problems.",
  paragraphs: [
    'Shifana is a Full Stack Developer with hands-on experience building and deploying web applications. She enjoys working across different layers of development, from creating responsive frontend experiences to implementing backend functionality, REST APIs, database integrations, and authentication systems.',
    'Her technical interests also extend to Generative AI, Large Language Models, and AI-powered applications.',
    'She is currently seeking opportunities as a Software Engineer or Full Stack Developer at an MNC or a high-growth technology startup, where she can contribute to meaningful projects, strengthen her engineering skills, and grow with a collaborative team.',
  ],
  focusTitle: 'Current Focus',
  focus: [
    'Full Stack Engineering',
    'Modern Web Applications',
    'AI-Integrated Experiences',
    'Scalable Application Development',
  ],
};

export type AccentTone = 'purple' | 'cyan' | 'blue' | 'mint' | 'lavender';
export type SkillIconKey = 'database' | 'globe' | 'brain' | 'chart' | 'wrench';

export interface SkillGroupData {
  id: string;
  number: string;
  title: string;
  icon: SkillIconKey;
  tone: AccentTone;
  items: string[];
}

export const skillGroups: SkillGroupData[] = [
  {
    id: 'languages-databases',
    number: '01',
    title: 'Languages & Databases',
    icon: 'database',
    tone: 'purple',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'MySQL', 'MongoDB'],
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Web Development',
    icon: 'globe',
    tone: 'cyan',
    items: [
      'HTML',
      'CSS',
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'PHP',
      'Flask',
      'REST APIs',
      'Authentication',
    ],
  },
  {
    id: 'generative-ai',
    number: '03',
    title: 'Generative AI',
    icon: 'brain',
    tone: 'lavender',
    items: [
      'Generative AI',
      'Large Language Models (LLMs)',
      'OpenAI API',
      'Gemini API',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
    ],
  },
  {
    id: 'ai-ml-data',
    number: '04',
    title: 'AI, Machine Learning & Data',
    icon: 'chart',
    tone: 'mint',
    items: ['OpenCV', 'MediaPipe', 'Scikit-learn', 'Streamlit', 'Power BI', 'Excel', 'Data Science'],
  },
  {
    id: 'tools-platforms',
    number: '05',
    title: 'Tools & Platforms',
    icon: 'wrench',
    tone: 'blue',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Cloud Basics', 'UI/UX Basics'],
  },
];

export const experience = {
  eyebrow: 'Professional journey',
  title: 'Professional Experience',
  role: 'Full Stack Developer',
  company: 'Zephyr Technologies & Solutions Pvt. Ltd.',
  responsibilities: [
    'Develop full-stack web applications using React.js, Next.js, Node.js, PHP, Python Flask, and MySQL.',
    'Build REST APIs, admin panels, and authentication systems.',
    'Collaborate with the team using Git and GitHub.',
  ],
  technologies: ['React.js', 'Next.js', 'Node.js', 'PHP', 'Python Flask', 'MySQL', 'REST APIs', 'Git', 'GitHub'],
};

export interface ProjectLinks {
  source: string;
  demo: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  accent: AccentTone;
  technologies: string[];
  description: string;
  features: string[];
  links: ProjectLinks;
}

export const projects: ProjectData[] = [
  {
    id: 'online-voting-system',
    number: '01',
    title: 'Online Voting System',
    category: 'Web Application',
    accent: 'purple',
    technologies: ['Python', 'Flask', 'MySQL'],
    description:
      'Built a voting platform with OTP authentication, role-based access, an admin dashboard, and live results.',
    features: ['OTP Authentication', 'Role-Based Access', 'Admin Dashboard', 'Live Results'],
    links: {
      source: '#replace-with-online-voting-source',
      demo: '#replace-with-online-voting-demo',
    },
  },
  {
    id: 'course-management-system',
    number: '02',
    title: 'Course Management System',
    category: 'Full Stack Application',
    accent: 'cyan',
    technologies: ['MERN Stack'],
    description:
      'Created course, user-role, and enrollment management features with secure role-based access and real-time updates.',
    features: ['Course Management', 'User Role Management', 'Enrollment Management', 'Secure Access', 'Real-Time Updates'],
    links: {
      source: '#replace-with-course-management-source',
      demo: '#replace-with-course-management-demo',
    },
  },
  {
    id: 'car-connect',
    number: '03',
    title: 'Car Connect',
    category: 'Car Rental Management System',
    accent: 'blue',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    description:
      'Developed vehicle management, online booking, authentication, an admin dashboard, and REST APIs.',
    features: ['Vehicle Management', 'Online Booking', 'Authentication', 'Admin Dashboard', 'REST APIs'],
    links: {
      source: '#replace-with-car-connect-source',
      demo: '#replace-with-car-connect-demo',
    },
  },
];

export const education = [
  {
    id: 'full-stack-course',
    title: 'Full Stack Development Course',
    institution: 'Zephyr Technologies & Solutions',
    period: null,
    result: null,
  },
  {
    id: 'second-puc',
    title: 'Second PUC — PCMB',
    institution: null,
    period: '2016–2017',
    result: '90%',
  },
  {
    id: 'sslc',
    title: 'SSLC',
    institution: null,
    period: '2014',
    result: '80%',
  },
];

export const languages = ['English', 'Kannada', 'Hindi', 'Malayalam'];

export const strengths = [
  'Communication',
  'Client Handling',
  'Problem Solving',
  'Teamwork',
  'Leadership',
  'Adaptability',
  'Eagerness to Learn',
];

export const contact = {
  eyebrow: 'Start a conversation',
  headingLead: 'Have an interesting opportunity?',
  headingAccent: "Let's build something meaningful.",
  supporting:
    "Whether it's a software engineering opportunity, a collaboration, or an interesting project, I'd be happy to connect.",
};

export const footer = {
  tagline: 'Software Engineer | Full Stack Developer',
};
