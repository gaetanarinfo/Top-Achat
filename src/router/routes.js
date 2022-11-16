const routes = [{
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [{
        path: '',
        component: () => import('src/pages/Home.vue')
      },
      {
        path: 'livraison',
        component: () => import('src/pages/Livraison.vue')
      },
      {
        path: 'collecte-des-avis',
        component: () => import('src/pages/Collecte-des-avis.vue')
      },
      {
        path: 'retractation',
        component: () => import('src/pages/Retractation.vue')
      },
      {
        path: 'cookies-et-trackers',
        component: () => import('src/pages/Cookies-et-trackers.vue')
      },
      {
        path: 'marque',
        component: () => import('src/pages/Marque.vue')
      },
      {
        path: 'plan',
        component: () => import('src/pages/Plan.vue')
      },
      {
        path: 'soldes',
        component: () => import('src/pages/Soldes.vue')
      },
      {
        path: 'paiement',
        component: () => import('src/pages/Paiement.vue')
      },
      {
        path: 'vente-flash',
        component: () => import('src/pages/Vente-flash.vue')
      },
      {
        path: 'bon-plan',
        component: () => import('src/pages/Bon-plan.vue')
      },
      {
        path: 'nouveautes',
        component: () => import('src/pages/Nouveautes.vue')
      },
      {
        path: 'ordinateurs',
        component: () => import('src/pages/Ordinateurs.vue')
      },
      {
        path: 'composants',
        component: () => import('src/pages/Composants.vue')
      },
      {
        path: 'peripheriques',
        component: () => import('src/pages/Peripheriques.vue')
      },
      {
        path: 'gaming',
        component: () => import('src/pages/Gaming.vue')
      },
      {
        path: 'assistance',
        component: () => import('src/pages/Assistance.vue')
      },
      {
        path: 'avant-ma-commande',
        component: () => import('src/pages/Avant-ma-commande.vue')
      },
      {
        path: 'suivi-avant-livraison',
        component: () => import('src/pages/Suivi-avant-livraison.vue')
      },
      {
        path: 'suivi-de-ma-livraison',
        component: () => import('src/pages/Suivi-de-ma-livraison.vue')
      },
      {
        path: 'remboursements',
        component: () => import('src/pages/Remboursements.vue')
      },
      {
        path: 'sav',
        component: () => import('src/pages/Sav.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
