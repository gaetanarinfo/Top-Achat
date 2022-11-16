<template>

  <div class="sep_h w-100"></div>

  <q-page class="flex flex-center home-height">

    <div class="bg-white w-100">

      <div class="sales content-wrapper">
        <h2>Les Soldes sont finis ! Rendez-vous aux prochains le Mercredi 11 Janvier 2023 à 8h... à
          bientôt pour de nouvelles offres incroyables.</h2>
        <div class="sales__links"><a href="https://www.topachat.com/pages/configomatic.php"
            class="sales__link custom-link br-10"><img width="180" height="180"
              src="https://media.topachat.com/media/s100/61f7cba4e7871b49b20576b3.webp" class="sales__link-img"> <span
              class="sales__link-label">Soldes ConfigoMatic</span></a><a
            href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_soldes.html"
            class="sales__link custom-link br-10"><img width="180" height="180"
              src="https://media.topachat.com/media/s100/619e42f92572885fae309554.webp" class="sales__link-img"> <span
              class="sales__link-label">Soldes PC / Périphériques / Informatique</span></a></div>
        <div class="fs-small"><span>Ne ratez pas l'ouverture des Soldes d'hiver
            2023 sur TopAchat avec des réductions de prix allant jusqu'à 70% !<br></span><span>Retrouvez tous les soldes
            PC, les soldes composants, les soldes périphériques et les
            soldes gaming sur TopAchat. -10%, -20%, -30%, -40%, -50%, -60% et même -70% ! Les meilleurs Soldes High Tech
            sont sur TopAchat ;-)<br></span><span>4 semaines de soldes sur
            TopAchat, c'est à partir du Mercredi 11 Janvier 2023 à 8h !!!<br></span></div>
      </div>

    </div>

    <!-- Footer -->
    <footerBloc />

  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import footerBloc from 'src/components/Footer.vue'

export default defineComponent({
  name: 'SoldesPage',
  components: {
    footerBloc
  },
  setup() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
})
</script>
