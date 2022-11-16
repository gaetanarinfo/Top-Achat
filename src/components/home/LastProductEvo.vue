<template>

  <div class="w-100">

    <q-tabs clickable
      @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_kitevo.html')"
      indicator-color="yellow" class="bg-blue-5 text-white shadow-2">
      <q-item class="title-item">Kits évo</q-item>
      <q-item-section avatar>
        <q-icon name="chevron_right" color="white" />
      </q-item-section>
    </q-tabs>

    <q-list bordered class="bg-white">

      <q-item @click="loadUrl(product.url)" v-for="product in productList" v-bind:key="product.id" clickable v-ripple
        tag="a" url>

        <q-item-section avatar class="home-promo__product custom-link color-inherit">
          <q-img :src="product.image" class="product-main-image home-promo__product-img" style="border-radius: 10px;" />
        </q-item-section>

        <q-item style="flex-direction: column;"><span class="text-bold">{{ product.title }}</span>
          <span class="text-red text-bold">{{ product.prix }}</span>
        </q-item>

      </q-item>

    </q-list>

    <q-item class="flex-center q-pt-md q-pb-md bg-white">
      <q-btn glossy color="blue-5"
        href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_kitevo.html" class="w-100">
        Voir plus de
        produits</q-btn>
    </q-item>

  </div>

  <div class="sep_h w-100"></div>

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'LastProductEvo',
  data() {
    return {
      productList: [],
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
      .get('lastProductsEvo')
      .then(res => {

        if (res.status == 200) {
          this.productList = res.data.products
        }

      })

  }
})
</script>
