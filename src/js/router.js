/** @format */

import Router from 'vue-router';
import Main from '../routes/Main';
import Discord from '../routes/Discord';

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/discord',
      name: 'discord',
      component: Discord,
    },
  ],
});
