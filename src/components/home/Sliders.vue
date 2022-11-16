<template>

  <div class="w-100">

    <div class="flex flex-center q-pa-xl" v-if="showLoader">
      <q-circular-progress indeterminate rounded size="50px" color="blue-4" class="q-ma-md" />
    </div>

    <q-carousel v-if="showSlider" autoplay animated v-model="slide" infinite>
      <q-carousel-slide v-for="slider in sliders" style="background-size: contain;background-color: #1b1e29;"
        v-bind:key="slider.id" :name="slider.id" :img-src="slider.image" @click="loadUrl(slider.url)" />
    </q-carousel>

  </div>

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

export default defineComponent({
  name: 'SliderHome',
  data() {
    return {
      sliders: [],
      showLoader: true,
      showSlider: false
    }
  },
  setup() {
    return {
      loadUrl(url) {
        document.location.href = url
      },
      slide: ref(1),
    }
  },
  mounted() {
    axios
      .get('/sliders')
      .then(res => {
        if (res.status == 200) {
          this.sliders = res.data.sliders
        }
      })

    setTimeout(() => {
      this.showLoader = false
      this.showSlider = true
    }, 1500);
  }
})
</script>
