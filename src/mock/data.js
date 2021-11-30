import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nikola Damjanović', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portofilo', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Nikola Damjanović',
  subtitle: " I'm a Student of Mathematics",
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: "I'm a Student of Mathematics and Computer Science, currently in my final year.",
  paragraphTwo:
    'My passion is game development mostly, but everything that has to do with programming I always get interested in it.',
  paragraphThree: 'My favorite qoute from South Park is, "What Seems to Be The Officer, Problem?"',
  resume: '/Nikola_Damjanovic_CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Python.jpg',
    title: 'RJukebox',
    info: 'API for custom built web app.',
    info2: 'Used Python Flask for development, with MySQL. Worked in a team of three.',
    url: '',
    repo: 'https://github.com/MATF-Computer-Networks-Projects/2021_RJukebox', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Python.jpg',
    title: 'Major Tactis',
    info: 'FPS esports team management simulator.',
    info2: 'Using Python for development, with PostgreSQL.',
    url: '',
    repo: 'https://github.com/damiapp/Major_Tactics', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'php.jpg',
    title: 'Web Shop App',
    info: 'Developed a web shop application for selling flowers.',
    info2:
      'Fuctional data base of accounts,items and a log in form. The whole project was done in HTML, CSS, Bootstrap,MySQL, JavaScript and PHP.',
    url: '',
    repo: 'https://github.com/damiapp/Project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reactjs.jpg',
    title: 'Web Presentation',
    info: 'Designed a simple presentation for student parlament needs.',
    info2: '',
    url: 'http://alas.matf.bg.ac.rs/~parlament/',
    repo: 'https://github.com/damiapp/parlamentSajt', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'unity.jpg',
    title: 'Space Impact',
    info:
      'Developed a game inspired by the original Space Impact. Used Unity engine for development and C#.',
    info2: 'Project was developed for course of Programming Paradigms in a team of three.',
    repo: 'https://github.com/damiapp/SpaceImpact', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'unity.jpg',
    title: 'Chess',
    info: 'Developed an original chess game. Used Unity engine and C# for development.',
    info2: 'Project was developed for fun.',
    url: '',
    repo: 'https://github.com/damiapp/Chess', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nikoladamjan@live.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/damiapp',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nikola-damjanović-670a7696',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
