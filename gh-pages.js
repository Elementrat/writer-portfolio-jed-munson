import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Elementrat/writer-portfolio-jed-munson.git', // Update to point to your repository
  user: {
   name: 'Elementrat', // update to use your name
   email: 'elementrat@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  (e) => {
   console.log('Deploy Complete!', e);
  }
);