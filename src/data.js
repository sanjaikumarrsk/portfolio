export const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const profile = {
  name: 'Sanjai Kumar R',
  role: 'AI & Data Science Student',
  phone: '+91 9655920225',
  email: 'r.sanjairsk@gmail.com',
  location: 'Karur, Tamil Nadu',
  github: 'https://github.com/sanjaikumarrsk',
  linkedin: 'https://www.linkedin.com/in/sanjai-kumar-r-7924a7366/',
  resume: assetPath('RSK-RESUME.pdf'),
}

export const college = {
  name: 'M. Kumarasamy College of Engineering',
  logo: assetPath('assets/mkce-logo.png'),
}

export const education = {
  batch: '2024 — 2028',
  academicYear: '2026 — 2027',
  cgpa: '8.70',
  cgpaNote: 'Up to 4th Semester',
  schoolLogo: assetPath('assets/mount-giris-logo.jpg'),
  schools: [
    { level: 'HSC', school: 'Mount Giris Matriculation Higher Secondary School', percentage: '85%' },
    { level: 'SSLC', school: 'Mount Giris Matriculation Higher Secondary School', percentage: '86%' },
  ],
}

export const projects = [
  {
    name: 'FRIDAY-',
    eyebrow: 'VOICE-FIRST SYSTEM',
    description: 'Smart mobile assistant capable of understanding voice and text commands to perform device actions.',
    technologies: ['Dart', 'Mobile', 'Automation'],
    github: 'https://github.com/sanjaikumarrsk/FRIDAY-',
    visual: 'friday',
    image: assetPath('assets/projects/friday-.png'),
    kind: 'Automation',
  },
  {
    name: 'INTRALINK',
    eyebrow: 'CIVIC INFRASTRUCTURE',
    description: 'Real-time civic issue management platform connecting citizens and authorities through web and mobile apps.',
    technologies: ['JavaScript', 'Socket.IO', 'Mobile'],
    github: 'https://github.com/sanjaikumarrsk/INTRALINK',
    visual: 'intralink',
    image: assetPath('assets/projects/intralink.png'),
    kind: 'Web',
  },
  {
    name: 'SIGNNOVA',
    eyebrow: 'COMPUTER VISION',
    description: 'AI-powered real-time hand gesture to speech and text conversion system for communication assistance.',
    technologies: ['Python', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/sanjaikumarrsk/SIGNNOVA',
    visual: 'signnova',
    image: assetPath('assets/projects/signnova.png'),
    kind: 'AI / ML',
  },
  {
    name: 'SMART-ALERT',
    eyebrow: 'EMERGENCY INTELLIGENCE',
    description: 'AI-powered emergency detection and alert system for real-time monitoring and rapid response.',
    technologies: ['Python', 'Deep Learning', 'Flask'],
    github: 'https://github.com/sanjaikumarrsk/SMART-ALERT',
    visual: 'alert',
    image: assetPath('assets/projects/smart-alert.png'),
    kind: 'AI / ML',
  },
  {
    name: 'LUNAR IMAGE REGISTRATION',
    eyebrow: 'LUNAR COMPUTER VISION',
    description: 'Computer vision workflow for registering Chandrayaan lunar imagery against reference maps across illumination, viewpoint, and scale changes.',
    technologies: ['Python', 'OpenCV', 'Image Registration'],
    github: 'https://github.com/sanjaikumarrsk/LUNAR-IMAGE-REGISTRATION',
    visual: 'lunar',
    image: assetPath('assets/projects/lunar-image-registration.png'),
    kind: 'AI / ML',
  },
  {
    name: 'SMART-WASHER-SYSTEM-',
    eyebrow: 'IOT AUTOMATION',
    description: 'IoT-enabled washing system for real-time monitoring, automated control, and energy optimization.',
    technologies: ['ESP32', 'ASP.NET', 'SQL Server'],
    github: 'https://github.com/sanjaikumarrsk/SMART-WASHER-SYSTEM-',
    visual: 'washer',
    image: assetPath('assets/projects/smart-washer-system-.png'),
    kind: 'Automation',
  },
]

export const skillGroups = [
  { name: 'Languages', icon: 'code', skills: [
    { name: 'Java', logo: assetPath('assets/tech/java.svg') }, { name: 'Python', logo: assetPath('assets/tech/python.svg') },
    { name: 'JavaScript', logo: assetPath('assets/tech/javascript.svg') }, { name: 'C', logo: assetPath('assets/tech/c.svg') },
    { name: 'SQL', logo: assetPath('assets/tech/sqlite.svg') },
  ] },
  { name: 'Frontend', icon: 'layout', skills: [{ name: 'HTML', logo: assetPath('assets/tech/html5.svg') }, { name: 'CSS', logo: assetPath('assets/tech/css3.svg') }, { name: 'JavaScript', logo: assetPath('assets/tech/javascript.svg') }, { name: 'React.js', logo: assetPath('assets/tech/react.svg') }] },
  { name: 'Backend', icon: 'server', skills: [{ name: 'Spring Boot', logo: assetPath('assets/tech/spring.svg') }, { name: 'JWT Authentication', logo: assetPath('assets/tech/jwt.svg') }] },
  { name: 'Databases', icon: 'database', skills: [{ name: 'PostgreSQL', logo: assetPath('assets/tech/postgresql.svg') }, { name: 'MySQL', logo: assetPath('assets/tech/mysql.svg') }, { name: 'MongoDB', logo: assetPath('assets/tech/mongodb.svg') }] },
  { name: 'Cloud & DevOps', icon: 'cloud', skills: [{ name: 'AWS', logo: assetPath('assets/tech/amazonwebservices.svg') }, { name: 'Microsoft Azure', logo: assetPath('assets/tech/azure.svg') }, { name: 'Docker', logo: assetPath('assets/tech/docker.svg') }, { name: 'Kubernetes', logo: assetPath('assets/tech/kubernetes.svg') }, { name: 'Jenkins', logo: assetPath('assets/tech/jenkins.svg') }, { name: 'Linux', logo: assetPath('assets/tech/linux.svg') }] },
]

export const certifications = [
  { name: 'AI Tools Workshop', issuer: 'Be10x', date: 'Jun 2026', credential: '0270772f-3809-4400-b29b-1e1c61cd09971445050', logo: assetPath('assets/organizations/be10x.png') },
  { name: 'Machine Learning with Python', issuer: 'IBM', date: 'Jun 2026', credential: 'fc722c027dde4c71892abde5cc9f0bdd', logo: assetPath('assets/organizations/ibm.png') },
  { name: 'Certificate of Participation in ByteQuest 1.0', issuer: 'Unstop', date: 'May 2026', credential: 'a0246c01-4d12-4c1a-82d5-4f416c1e0641', logo: assetPath('assets/brands/unstop.svg') },
  { name: 'Data Analysis with Python', issuer: 'IBM', date: 'May 2026', credential: '24d6b183074c43eb92d3c1086bd17d99', logo: assetPath('assets/organizations/ibm.png') },
  { name: 'Java (Basic) Certificate', issuer: 'HackerRank', date: 'Apr 2026', credential: '95BBDEDE83B', logo: assetPath('assets/organizations/hackerrank.png') },
  { name: 'Microsoft Applied Skills: Get started with Azure management tasks', issuer: 'Microsoft', date: 'Apr 2026', credential: '49AE52014C5D7539', logo: assetPath('assets/organizations/microsoft.png') },
  { name: 'Data Science', issuer: 'IBM', date: 'Jan 2026', credential: '12402247efa642f5bdadc04320bac9a', logo: assetPath('assets/organizations/ibm.png') },
  { name: 'Introduction to Python', issuer: 'IBM', date: 'Jan 2026', credential: '00426812c79444083a3e80a4d2b03f', logo: assetPath('assets/organizations/ibm.png') },
]

export const achievements = [
  { title: 'Microsoft Student Ambassador', meta: 'MICROSOFT', text: 'Recognized for promoting developer technologies and engaging with the student developer community.', icon: 'windows' },
  { title: 'Google Student Ambassador', meta: 'GOOGLE', text: 'Supporting technical initiatives and building a culture of learning with fellow developers.', icon: 'google' },
  { title: '1st Place — Project Expo', meta: 'M. KUMARASAMY COLLEGE OF ENGINEERING', text: 'Ranked first among project teams for technical depth and real-world applicability.', icon: 'trophy' },
  { title: '1st Place — Stranger Thinks', meta: 'UNSTOP IGNITERS CLUB', text: 'Won the idea pitching competition for innovation and business viability.', icon: 'medal' },
  { title: '2nd Place — GDSC QuizX', meta: 'GDSC', text: 'Placed second in a fast-paced technical and analytical challenge.', icon: 'award' },
]

export const focusAreas = ['Java full-stack development', 'Backend architecture', 'AI / ML applications', 'Cloud technologies', 'DevOps automation']
