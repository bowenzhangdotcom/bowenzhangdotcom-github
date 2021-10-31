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
  paragraphOne: `I'm a self-taught developer turned systems software engineer at Yext. Thanks for stopping by, I'm excited to share my personal projects with you!`,
  paragraphTwo: `I graduated in 2017 from Cornell University with a B.S. in Finance & Strategy and started my career at ZS Associates as a management consultant. After developing a passion for technology, I joined Yext's UPWARD rotational program, where I worked on the Data Science and Product Management teams. Currently, I support the Data Science & Machine Learning teams through building robust infrastructure for our Natural Language Processing (NLP) models powering Yext Answers.`,
  paragraphThree: `Outside of work, I enjoy playing poker, listening to electronic music, watching Super Smash Bros. Melee, and getting better at picking up heavy things and putting them down.`,
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
    img: 'DD_me.png',
    title: 'DateDash.me',
    info: 'Dashboard for Hinge activity with interaction breakdowns by matches and date.',
    info2:
      'Created with React.js and data from Hinge. Data is processed client-side with Javascript.',
    url: 'https://datedash.me/',
    repo: 'https://github.com/bowenzhangdotcom/datedashme',
  },
  {
    id: uuidv1(),
    img: 'poker-preflop.png',
    title: 'Preflop Poker Assistant',
    info:
      "Displays poker range charts for heads-up and 6max online No Limit Texas Hold'em with a RNG calculator.",
    info2: 'Made with React.js and queries data from MongoDB with routing from Express.js.',
    url: 'https://bowenzhang.com/PreflopPokerAssistant/',
    repo: 'https://github.com/bowenzhangdotcom/PreflopPokerAssistant',
  },
  {
    id: uuidv1(),
    img: 'poker-payment.png',
    title: 'Poker Payment',
    info:
      'Distributes payments to people after a poker game. Built in support for PokerNow, DonkHouse, and manual form entries.',
    info2: 'Made with React.js. and a love of poker home games.',
    url: 'https://bowenzhang.com/poker-payment/',
    repo: 'https://github.com/bowenzhangdotcom/poker-payment',
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
