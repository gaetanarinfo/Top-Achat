<template>

  <div class="sep_h w-100"></div>

  <q-page style="min-height: auto;">

    <div class="cms-document cms-content content-wrapper">
      <div class="cms-header-assistance">
        <div class="cms-header-assistance-text bold br-10-b">SAV : Garanties et retours</div> <img
          src="https://www.topachat.com/_nuxt/img/assistance-header.df28f0c.jpg"
          class="cms-header-assistance-img br-10">
      </div>

      <div class="cms-layout simple grid"></div>
      <div class="cms-layout grid grid_33-33-33">
        <div class="cms-block prose">
          <div class="cms-block__content"></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block prose">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/sav/index-depanomatic"
              class="btn-assistance custom-link"><span class="icon icon--montage"></span><span
                class="btn-assistance__text"><span class="btn-assistance__title muli">Le DépanoMatic</span><span
                  class="btn-assistance__description">Aide à la mise en service / Assistance au dépannage / Aide au
                  diagnostic</span></span></a></div>
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
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/sav/retractation"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Me rétracter</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/sav/produit-en-panne"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Le produit que j'ai reçu est en panne</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a
              href="https://www.topachat.com/p/assistance/suivi-de-ma-livraison/colis-abime"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Le produit que j'ai reçu est abîmé</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a
              href="https://www.topachat.com/p/assistance/suivi-de-ma-livraison/livraison-incomplete"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Le produit que j'ai reçu n'est pas
                  complet</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/sav/produit-non-conforme"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Le produit que j'ai reçu n'est pas conforme</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/sav/produits-usages"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Reprise d'un produit usagé</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/sav/suivi-de-retour"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Traitement et délais des retours</span></span></a></div>
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
  name: 'SavPage',
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
