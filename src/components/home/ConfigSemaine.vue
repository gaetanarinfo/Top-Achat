<template>

  <div class="sep_h w-100"></div>

  <div class="w-100">

    <q-tabs clickable class="bg-white text-white text-black">
      <q-item class="title-item text-center w-100 d-flex flex-center">#ConfigDeLaSemaine</q-item>
    </q-tabs>

    <div class="bg-white w-100 flex-center flex">
      <q-item v-for="config in configList" v-bind:key="config.id" style="flex-direction: column;align-items: center;">

        <img style="max-width: 150px;border-radius: 10px;" :src="config.image">

        <q-item-section style="color: #eb0000; font-weight: 700;" class="text-h6 q-mt-md text-center">{{
            config.prix
        }}

        </q-item-section>

        <q-item class="flex-center q-mb-md q-mt-md bg-white w-100">
          <q-btn glossy color="blue-5" :href="config.url" class="w-100">
            Voir la config complète</q-btn>
        </q-item>

        <div v-for="config in configList2" v-bind:key="config.id" class=" w-100">

          <q-item style="border: 1px solid #ccc;padding: 0 16px;border-radius: 10px;">

            <q-item
              style="font-size: 25px;width: 25px;height: 25px;color: rgb(243, 172, 64);margin-right: 20px;padding: 0;align-items: center;">
              <i class="fa-solid fa-trophy"></i>
            </q-item>

            <q-item style="font-size: 18px;padding: 10px 0;">{{ config.texte }}</q-item>

          </q-item>

          <q-item style="font-size: 18px; font-weight: 700;padding: 10px 0 0 0;" class="q-pl-none">{{
              config.separator
          }}</q-item>

          <div style="font-size: 16px;" v-html="config.content"></div>

        </div>

        <div v-for="config in configList3" v-bind:key="config.id" class="w-100">
          <div v-html="config.ratings" class="cotw__ratings"></div>
        </div>

      </q-item>

    </div>

  </div>

  <div class="sep_h w-100"></div>

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'ConfigSemaineHome',
  data() {
    return {
      configList: [],
      configList2: [],
      configList3: [],
    }
  },
  setup() {
    return {
      loadUrl(url) {
        document.location.href = url
      },
    }
  },
  mounted() {

    axios
      .get('configSemaine')
      .then(res => {

        if (res.status == 200) {
          this.configList = res.data.products
        }

      })

    axios
      .get('configReward')
      .then(res => {

        if (res.status == 200) {
          this.configList2 = res.data.products
          this.configList3 = res.data.ratings
        }

      })

  }
})
</script>
