import { createRouter, createWebHashHistory } from 'vue-router'
import StyleguideView from '@/views/StyleguideView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/styleguide',
      name: 'styleguide',
      component: StyleguideView,
    },
  ],
})

export default router
