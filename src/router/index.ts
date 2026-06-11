import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'hub',
      component: () => import('@/pages/hub/HubPage.vue'),
    },
    {
      path: '/ds-team',
      name: 'ds-team',
      component: () => import('@/pages/ds-team/DSTeamPage.vue'),
    },
    {
      path: '/cdm-team1',
      name: 'cdm-team1',
      component: () => import('@/pages/cdm-team1/CDMTeam1Page.vue'),
    },
    {
      path: '/cdm-team2',
      name: 'cdm-team2',
      component: () => import('@/pages/cdm-team2/CDMTeam2Page.vue'),
    },
    {
      path: '/cm-team',
      name: 'cm-team',
      component: () => import('@/pages/cm-team/CMTeamPage.vue'),
    },
    {
      path: '/safety-team',
      name: 'safety-team',
      component: () => import('@/pages/safety-team/SafetyTeamPage.vue'),
    },
  ],
})

export default router
