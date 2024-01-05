const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://chayanrastogi.github.io/Personal-Portfolio/',
  title: 'CR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chayan Rastogi',
  role: 'Front End Developer',
  description:
    'MERN stack developer with a passion for creating beautiful, functional, and user-friendly websites. I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. I am always looking for new challenges and opportunities to grow as a developer.',
  resume: 'https://drive.google.com/file/d/1SyohDbmEXsIMv79NaQ7iQkypyREdXKvz/view?usp=sharing://www.dropbox.com/scl/fi/cw1vgtdyw16etf83ss5br/Chayan_Rastogi.pdf?rlkey=73saxmfork2feshwy49zekvv7&dl=0',
  social: {
    linkedin: 'https://www.linkedin.com/in/chayanrastogi88/',
    github: 'https://github.com/chayanrastogi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Threads Clone',
    description:
      '🚀 Developed a feature-rich Social Media app using the MERN stack with real-time messaging feature',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Sockect.io', 'Recoil', 'Cloudinary', 'Chakra UI'],
    sourceCode: 'https://github.com/chayanrastogi/Threads',
    livePreview: 'https://www.canva.com/design/DAF1iK_jGhQ/AM8qGQB_zBwwSZftpZE-CQ/watch?utm_content=DAF1iK_jGhQ&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  },
  {
    name: 'iNoteBook',
    description:
      '📝 Welcome to the MERN Note-Taking App. This full-stack application allows users to sign up, log in, and apply CRUD operations on their notes.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bootstrap'],
    sourceCode: 'https://github.com/chayanrastogi/iNotebook-Frontend',
    livePreview: 'https://inotebook88088.netlify.app/',
  },
  {
    name: 'Weather-App',
    description:
      `☁️ Real-time Weather forecast app.Allowed users to access weather information for any location worldwide using search.`,
    stack: ['React.js', 'Axios'],
    sourceCode: 'https://github.com/chayanrastogi/Weather-App-React',
    livePreview: 'https://chayanrastogi.github.io/Weather-App-React/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Redux-Toolkit',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Recoil',
  'Tailwind CSS',
  'Chakra UI',
  'Bootstrap',
  'mongoose',
  'Firebase',
  'MySQL',
  'Git',
  'GitHub',
  'Canva',
  'Figma',
  'Java',
  'Python',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'cp.chayanrastogi@gmail.com',
}

export { header, about, projects, skills, contact }
