const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/bowenzhangdotcom/bowenzhangdotcom.github.io',
  },
  () => {
    console.log('Deploy Complete!');
  }
);
