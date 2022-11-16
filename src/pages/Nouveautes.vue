<template>

  <div class="sep_h w-100"></div>

  <q-page style="min-height: auto;">

    <div class="bg-white w-100 bon-plan content-wrapper" v-html="nouveautes">

    </div>

  </q-page>

  <div class="sep_h w-100"></div>

  <!-- Footer -->
  <footerBloc />

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import footerBloc from 'src/components/Footer.vue'

export default defineComponent({
  name: 'NouveautesPage',
  components: {
    footerBloc
  },
  data() {
    return {
      nouveautes: []
    }
  },
  setup() {
    return {

    }
  },
  mounted() {

    axios
      .get('nouveautes')
      .then(res => {

        if (res.status == 200) {
          this.nouveautes = res.data.nouveautes
        }

      })

  }
})
</script>
