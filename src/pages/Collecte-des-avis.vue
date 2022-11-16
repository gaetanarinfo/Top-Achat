<template>

  <div class="sep_h w-100"></div>

  <q-page class="flex flex-center home-height">

    <div class="bg-white w-100">
      <div class="cms-document cms-content content-wrapper">
        <div class="cms-layout simple">
          <div class="cms-block prose">
            <div class="cms-block__content">
              <h1>Méthode de collecte des avis sur TopAchat.com</h1>
              <p>Tous les avis publiés sur le site TopAchat.com sont modérés par TopAchat.com</p>
              <p>Les avis présentés sur la fiche produit sont affichées dans l'ordre décroissant de la note et par ordre
                chronologique décroissant de publication.</p>
              <p>Tous les avis sont publiés sans contrepartie d'aucune façon de la part de TopAchat.com</p>
              <p>La durée de conservation d'un avis avant sa publication est de maximum 30 jours.</p>
              <p>Tous les avis sont publiés en l'état et ne subissent aucune modification de la part de TopAchat.com</p>
              <p>TopAchat.com se réserve le droit de refuser la publication d’un avis si il contient des propos
                illégaux, diffamatoires, obscènes, pornographiques, indécents, harcelants, menaçants, nuisibles ou hors
                de propos.</p>
              <p><a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000035720935">Décret n°2017-1436 du 5 Octobre
                  2017 au JORF</a></p>
            </div>
          </div>
        </div>
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
  name: 'CollectePage',
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
