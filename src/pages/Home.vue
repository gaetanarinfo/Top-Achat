<template>

  <q-page class="flex flex-center home-height">

    <!-- Slider -->
    <sliderHome />

    <div class="bg-white w-100 q-pa-md">
      <a href="https://www.topachat.com/pages/configomatic.php"
        class="mobile-menu__item configo-link custom-link mobile-menu__configo"><img alt="Configomatic"
          src="https://www.topachat.com/img/configo_logo.svg" width="48" height="62" class="configo-link__image"> <img
          alt="Configomatic" src="https://www.topachat.com/img/configo-text.svg" width="200" height="50"
          class="configo-link__image configo-link__image--text">
        <span class="configo-link__label"> Crée ton PC sur mesure </span></a>
    </div>

    <!-- Last Product -->
    <lastProduct />

    <!-- Config Semaine -->
    <configSemaine />

    <!-- Last Product Evo -->
    <lastProductEvo />

    <!-- Catégories -->
    <categories />

    <!-- Top Marque -->
    <topMarque />

    <!-- Footer -->
    <footerBloc />

  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import sliderHome from 'src/components/home/Sliders.vue'
import lastProduct from 'src/components/home/LastProduct.vue'
import lastProductEvo from 'src/components/home/LastProductEvo.vue'
import configSemaine from 'src/components/home/ConfigSemaine.vue'
import categories from 'src/components/home/Categories.vue'
import topMarque from 'src/components/home/TopMarque.vue'
import footerBloc from 'src/components/Footer.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    sliderHome,
    lastProduct,
    configSemaine,
    lastProductEvo,
    categories,
    topMarque,
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
