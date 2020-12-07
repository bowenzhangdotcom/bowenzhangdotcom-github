import { v1 as uuidv1 } from 'uuid';

// HEAD DATA
export const headData = {
  title: "Bowen's Personal Projects",
  lang: 'en',
  description: 'Welcome to BowenZhang.com!',
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is ',
  name: 'Bowen Zhang',
  subtitle: 'Welcome to my personal projects',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: `I'm a self-taught full stack developer with experience in JavaScript and Python. Thanks for stopping by, I'm excited to share my personal projects with you!`,
  paragraphTwo: `Currently, I am pursuing my passion for technology through the UPWARD rotational program at Yext as part of the Data Science and Machine Learning team. I graduated in 2017 from Cornell University with a B.S. in Finance & Strategy and previously worked at ZS Associates as a management consultant.`,
  paragraphThree: `Outside of work, I also enjoy poker, electronic music, Super Smash Bros. and getting better at picking heavy things up and putting them down`,
  resume: 'https://www.linkedin.com/in/bowenzhangdotcom/',
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: '',
  // },
  {
    id: uuidv1(),
    img: 'poker-preflop.png',
    title: 'Preflop Poker Assistant',
    info:
      "Displays poker range charts for heads-up and 6max online No Limit Texas Hold'em with a RNG calculator.",
    info2: 'Made with React.js and queries data from the Preflop Poker Assistant Server.',
    url: 'https://bowenzhang.com/PreflopPokerAssistant/',
    repo: 'https://github.com/bowenzhangdotcom/PreflopPokerAssistant',
  },
  {
    id: uuidv1(),
    img: 'ppa_server.png',
    title: 'Preflop Poker Assistant Server',
    info: 'Converts poker shorthand ranges into a hand matrix stored in MongoDB.',
    info2:
      'Made with Node.js, MongoDB, Express.js, and Joi. Data processed and uploaded with Python.',
    url: 'https://poker-preflop.herokuapp.com/',
    repo: 'https://github.com/bowenzhangdotcom/poker-preflop-server',
  },
  {
    id: uuidv1(),
    img: 'covid-project.png',
    title: 'COVID-19 Tracker',
    info:
      'Global tracker for COVID-19 infections, recoveries, and deaths. Data is available individually by country and is updated in real-time.',
    info2: 'Built with React.js and Node.js. Data from the Johns Hopkins CSSE API',
    url: 'https://bowenzhang.com/covid-19tracker/',
    repo: 'https://github.com/bowenzhangdotcom/covid-19tracker',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to learn more?',
  btn: 'Contact me',
  email: 'mailto:bowen@bowenzhang.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bowenzhangdotcom/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/bowenzhangdotcom',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
