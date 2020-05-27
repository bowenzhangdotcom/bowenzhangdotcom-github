import { v1 as uuidv1 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Bowen Zhang | Developer',
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
  paragraphOne: `I'm a self-taught full stack developer with experience in JavaScript, Python, & Java and am excited to share my personal projects with you!`,
  paragraphTwo: `Professionally, I am pursuing my passion for technology through the UPWARD rotational program at Yext. I graduated in 2017 from Cornell University with a B.S. in Finance & Strategy and am a former management consultant with ZS Associates.`,
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
  // {
  //   id: uuidv1(),
  //   img: 'stonks.png',
  //   title: 'NiceStocks.Info - WIP',
  //   info: 'Daily stock price tracker with alerts set for specific price movements',
  //   info2:
  //     'Building with React, Node.js, Material UI. Note: See Live link is disabled until project completion.', // TODO add stock api used
  //   url: '',
  //   repo: 'https://github.com/bowenzhangdotcom',
  // },
  {
    id: uuidv1(),
    img: 'covid-project.png',
    title: 'COVID-19 Tracker',
    info:
      'Global tracker for COVID-19 infections, recoveries, and deaths. Data is available individually by country and is updated in real-time.',
    info2: 'Built with React, Node.js, Material UI, and data from the Johns Hopkins CSSE API',
    url: 'https://bowenzhang.com/corona-tracker/',
    repo: 'https://github.com/bowenzhangdotcom/corona-tracker',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to learn more?',
  btn: 'Contact me',
  email: 'mailto:bowenzhang@gmail.com',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
