<template>

  <q-page class="flex flex-center home-height" v-if="showVente">

    <div class="bg-white w-100">

      <div class="vfl">

        <div class="content-wrapper">

          <h1 style="padding-top: 0;margin-top: 0;">Ventes Flash Top Achat</h1>

          <div class="vfl__sub-header">
            En ce moment, nous vous proposons de faire des économies sur :
          </div>

        </div>

      </div>

    </div>

  </q-page>

  <q-page>

    <div class="flex flex-center q-pa-xl" v-if="showLoader">
      <q-circular-progress indeterminate rounded size="50px" color="blue-4" class="q-ma-md" />
    </div>

    <div class="bg-white w-100" v-if="showVente">

      <div class="vfl">

        <div class="vfl__products" v-html="venteFlash"></div>

      </div>

    </div>

  </q-page>

  <!-- Footer -->
  <footerBloc />

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import footerBloc from 'src/components/Footer.vue'

export default defineComponent({
  name: 'VenteFlashPage',
  components: {
    footerBloc
  },
  data() {
    return {
      venteFlash: [],
      showLoader: true,
      showVente: false
    }
  },
  setup() {
    return {

    }
  },
  mounted() {

    axios
      .get('vente-flash')
      .then(res => {

        if (res.status == 200) {
          this.venteFlash = res.data.venteFlash
        }

      })

    setTimeout(() => {
      this.showLoader = false
      this.showVente = true
    }, 1500);

  }
})
</script>
