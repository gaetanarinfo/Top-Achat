<template>

  <div class="sep_h w-100"></div>

  <q-page style="min-height: auto;">

    <div class="cms-document cms-content content-wrapper">
      <div class="cms-header-assistance">
        <div class="cms-header-assistance-text bold br-10-b">Avant ma commande</div> <img
          src="https://www.topachat.com/_nuxt/img/assistance-header.df28f0c.jpg"
          class="cms-header-assistance-img br-10">
      </div>

      <div class="cms-layout grid grid_33-33-33">
        <div class="cms-block prose">
          <div class="cms-block__content"></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block prose center">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/avant-ma-commande/configomatic"
              class="btn-assistance custom-link">
              <span class="btn-assistance__text"><span class="btn-assistance__title muli">Le ConfigoMatic</span><span
                  class="btn-assistance__description">L'outil de conception de PC sur mesure / Options de montage /
                  Assemblage par nos experts / Compatibilités</span></span>
            </a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block prose">
          <div class="cms-block__content"></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </div>
      <div class="cms-layout grid grid_25-25-25-25">
        <div class="cms-block">
          <div class="cms-block__content"><a
              href="https://www.topachat.com/p/assistance/avant-ma-commande/acheter-sur-le-site"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Acheter sur le site</span><span
                  class="btn-assistance__description">Informations générérales / stocks / prix /
                  sécurité</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/avant-ma-commande/paiement"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Les moyens de paiement</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/avant-ma-commande/livraison"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Les modes de livraison</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/avant-ma-commande/garanties"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Les garanties</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </div>
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
  name: 'AvantCommandePage',
  components: {
    footerBloc
  },
  data() {
    return {
    }
  },
  setup() {
    return {

    }
  },
  mounted() {

  }
})
</script>
