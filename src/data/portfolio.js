/**
 * ============================================================
 *  PORTFOLIO CONTENT — EDIT THIS FILE TO UPDATE THE WEBSITE
 * ============================================================
 *  Everything shown on the site comes from here.
 *  Icons are referenced by name (see src/components/Icon.jsx).
 */

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Mohamed Mohamed Elhoufy',
  shortName: 'Mohamed Elhoufy',
  title: 'Mechatronics Engineer | Data Analysis | Generative AI & AI Agents',
  role: 'Mechatronics Engineer',
  focus: ['Data Analysis', 'Generative AI', 'AI Agents'],
  location: 'Cairo, Egypt',
  email: 'm.m.elhoufy@gmail.com',
  phones: [
    { label: '+20 01010047068', href: 'tel:+201010047068' },
    { label: '+20 01555789659', href: 'tel:+201555789659' },
  ],
  linkedin: {
    label: 'linkedin.com/in/mohamed-elhoufy',
    url: 'https://www.linkedin.com/in/mohamed-elhoufy',
  },
  // 👇 Replace public/assets/profile.jpg with your photo (same file name) — nothing else to change.
  photo: `${base}assets/profile.jpg`,
  heroIntro:
    'I connect engineering data, technical workflows and AI — from hydraulic network models to practical automation. I build useful systems that turn raw data into clear decisions and outputs.',
  heroBadges: ['Hydraulic Analysis', 'Data Analysis', 'AI Agents'],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  paragraphs: [
    'I am a Mechatronics Engineer with professional experience in hydraulic analysis, engineering data analysis, and technical systems.',
    'Currently, I am developing practical expertise in Data Analysis, Generative AI, AI Agents, and automation, with a focus on building useful systems that connect data, engineering workflows, and AI.',
    'My background combines engineering problem-solving, data analysis, technical systems, and hands-on digital fabrication experience. I am particularly interested in practical AI solutions that automate repetitive business and engineering tasks and turn raw data into useful decisions and outputs.',
  ],
  // Strong foundation callout
  foundation: {
    title: 'A real engineering and data foundation',
    text: 'Since 2023 I have worked on hydraulic network analysis for a water and drainage company — modeling, calibrating and validating networks and working with real pressure and flow measurement data. That hands-on experience is the foundation for everything I build with data and AI.',
  },
  highlights: [
    { icon: 'Droplets', title: 'Hydraulic Analysis', text: 'Professional experience since 2023' },
    { icon: 'BarChart3', title: 'Data Analysis', text: 'Excel, Power Query, Power BI, SQL' },
    { icon: 'Bot', title: 'AI & Automation', text: 'Generative AI and AI agent workflows' },
    { icon: 'CircuitBoard', title: 'Technical Systems', text: 'Mechatronics, embedded & fabrication' },
  ],
}

export const services = [
  {
    icon: 'BarChart3',
    title: 'Data Analysis',
    description: 'Turn messy spreadsheets and raw data into organized, reliable reports and dashboards.',
    items: [
      'Excel data cleaning',
      'Power Query automation',
      'Power BI dashboards',
      'Data organization',
      'Engineering data analysis',
      'Reports and visualizations',
    ],
  },
  {
    icon: 'Workflow',
    title: 'AI & Automation',
    description: 'Practical AI workflows that remove repetitive manual work from everyday tasks.',
    items: [
      'AI workflow automation',
      'AI Agent prototypes',
      'Generative AI workflows',
      'Document and data automation',
      'Business process automation',
    ],
  },
  {
    icon: 'Droplets',
    title: 'Engineering Data',
    description: 'Make sense of measurement and network data with clear analysis and dashboards.',
    items: [
      'Hydraulic data analysis',
      'Measurement data processing',
      'Engineering dashboards',
      'Hydraulic analysis support',
    ],
  },
]

export const skillGroups = [
  {
    icon: 'BarChart3',
    title: 'Data Analysis',
    skills: ['Excel', 'Power Query', 'Power BI', 'SQL', 'Data Cleaning', 'Data Visualization', 'Engineering Data Analysis'],
  },
  {
    icon: 'Brain',
    title: 'AI / Machine Learning',
    skills: ['Python', 'TensorFlow / Keras', 'PyTorch', 'NLP', 'Computer Vision', 'Transformers', 'BERT', 'RNN / LSTM / GRU'],
  },
  {
    icon: 'Sparkles',
    title: 'Generative AI',
    skills: ['Large Language Models', 'Prompt Engineering', 'Hugging Face', 'Open-source LLMs', 'RAG', 'Generative AI Applications'],
  },
  {
    icon: 'Bot',
    title: 'AI Agents & Automation',
    skills: ['AI Agents', 'Agentic AI', 'LangChain', 'LangGraph', 'CrewAI', 'AI workflow automation', 'Business process automation'],
  },
  {
    icon: 'Droplets',
    title: 'Engineering',
    skills: ['WaterGEMS', 'SewerGEMS', 'Hydraulic Analysis', 'QGIS', 'Engineering Data Processing'],
  },
  {
    icon: 'Cpu',
    title: 'Embedded Systems',
    skills: ['Embedded C', 'Microcontrollers', 'ATmega32', 'STM32', 'ESP32', 'Embedded Systems Architecture'],
  },
]

/**
 * ADD NEW PROJECTS HERE.
 * - `link` is optional. Leave it out (or empty) and the card shows the "status" badge instead.
 * - Only add a `link` when you have a real public URL (GitHub, live demo, article...).
 */
export const projects = [
  {
    icon: 'Droplets',
    category: 'Engineering',
    title: 'Hydraulic Network Analysis',
    description:
      'Real-world engineering work involving hydraulic modeling, pressure zones, network analysis, measurement data, and leakage-reduction studies.',
    tags: ['WaterGEMS', 'SewerGEMS', 'Pressure zones', 'Measurement data', 'Leakage reduction'],
    status: 'Case Study / In Progress',
    link: '',
  },
  {
    icon: 'LineChart',
    category: 'Data Analysis',
    title: 'Engineering Data Analysis Dashboard',
    description:
      'Data analysis and visualization using Excel, Power Query and Power BI for engineering and measurement data.',
    tags: ['Excel', 'Power Query', 'Power BI', 'Data Visualization'],
    status: 'Case Study / In Progress',
    link: '',
  },
  {
    icon: 'Brain',
    category: 'NLP',
    title: 'NLP / Named Entity Recognition',
    description:
      'An NLP project comparing different sequence and transformer-based approaches for Named Entity Recognition.',
    tags: ['Python', 'NLP', 'RNN', 'LSTM', 'GRU', 'Transformer', 'BERT'],
    status: 'Case Study / In Progress',
    link: '',
  },
  {
    icon: 'Bot',
    category: 'AI Agents',
    title: 'AI Agent & Automation Projects',
    description:
      'Projects focused on using Generative AI, AI Agents, and workflow automation to automate practical business tasks.',
    tags: ['Generative AI', 'AI Agents', 'LangChain', 'LangGraph', 'CrewAI'],
    status: 'Case Study / In Progress',
    link: '',
  },
]

export const experience = [
  {
    role: 'Planning & Development Engineer — Hydraulic Analysis',
    org: 'Beheira Water and Drainage Company (BWADC)',
    period: '2023 – Present',
    current: true,
    note: 'A strong real-world engineering and data background built on hydraulic models and measurement data.',
    points: [
      'Hydraulic network analysis and planning',
      'Building, calibrating, and validating hydraulic models',
      'Working with WaterGEMS and SewerGEMS',
      'Pressure-zone analysis',
      'Network expansion and rehabilitation studies',
      'Network interconnection studies',
      'Engineering and measurement data analysis',
      'Supporting leakage-reduction analysis',
      'Working with pressure and flow measurement data',
      'Developing data-analysis workflows and dashboards',
    ],
  },
  {
    role: 'Manager Assistant & Digital Fabrication Engineer',
    org: 'Al Fabrika Digital Fabrication Lab / CLUSTER Cairo',
    period: '2019 – 2020',
    current: false,
    points: [
      'CNC machines',
      'Laser cutters',
      '3D printers',
      'Digital fabrication',
      'Technical workshops',
      'Supporting fabrication projects',
    ],
  },
]

export const education = {
  degree: {
    title: 'B.Sc. Mechatronics Engineering',
    org: 'Alexandria Higher Institute of Engineering & Technology (AIET)',
    period: '2012 – 2017',
    grade: 'Grade: Good',
    project: {
      title: 'Graduation Project — Full Scale Electric Car',
      grade: 'Project grade: Excellent',
      points: [
        'DC motor speed and direction control',
        'Stepper motor steering',
        'Ultrasonic obstacle detection',
        'Automatic stopping when an obstacle is detected',
      ],
    },
  },
  training: {
    title: 'Technical Diploma — Embedded Systems Engineering',
    org: 'National Telecommunication Institute (NTI) · Digital Egypt Youth Program',
    period: 'November 2020 – March 2021',
    duration: 'Duration: 5 months',
  },
}

// Only verified milestones from the information above — nothing invented.
export const achievements = [
  {
    icon: 'Award',
    title: 'Graduation project: Excellent',
    text: 'Full Scale Electric Car — motor control, steering and obstacle detection.',
  },
  {
    icon: 'GraduationCap',
    title: 'Embedded Systems diploma',
    text: '5-month technical diploma at NTI through the Digital Egypt Youth Program.',
  },
  {
    icon: 'Droplets',
    title: 'Hydraulic modeling in practice',
    text: 'Working with WaterGEMS and SewerGEMS at a water and drainage company since 2023.',
  },
  {
    icon: 'Wrench',
    title: 'Digital fabrication',
    text: 'Hands-on CNC, laser cutting and 3D printing experience (2019 – 2020).',
  },
]

export const contactProjectTypes = ['Data Analysis', 'AI & Automation', 'Engineering Data', 'Other']
