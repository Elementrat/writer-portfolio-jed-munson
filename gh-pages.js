import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Elementrat/jed-munson-svelte.git', // Update to point to your repository
  user: {
   name: 'Elementrat', // update to use your name
   email: 'elementrat@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);