<template>

  <div class="sep_h w-100"></div>

  <q-page style="min-height: auto;">

    <div class="flex flex-center q-pa-xl" v-if="showLoader">
      <q-circular-progress indeterminate rounded size="50px" color="blue-4" class="q-ma-md" />
    </div>

    <div v-if="showPlan" class="bg-white w-100 bon-plan content-wrapper" v-html="bonPlan">

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
  name: 'BonPlanPage',
  components: {
    footerBloc
  },
  data() {
    return {
      showLoader: true,
      showPlan: false,
      bonPlan: []
    }
  },
  setup() {
    return {

    }
  },
  mounted() {

    axios
      .get('bon-plan')
      .then(res => {

        if (res.status == 200) {
          this.bonPlan = res.data.bonPlan
        }

      })

    setTimeout(() => {
      this.showLoader = false
      this.showPlan = true
    }, 1200);

  }
})
</script>
