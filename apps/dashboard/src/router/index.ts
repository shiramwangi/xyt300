import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Skills from '../views/Skills.vue';
import Projects from '../views/Projects.vue';
import Suggestions from '../views/Suggestions.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: Suggestions,
    },
  ],
});

export default router;
