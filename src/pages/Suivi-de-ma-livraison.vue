<template>

  <div class="sep_h w-100"></div>

  <q-page style="min-height: auto;">

    <div class="cms-document cms-content content-wrapper">
      <div class="cms-header-assistance">
        <div class="cms-header-assistance-text bold br-10-b">Suivi de ma livraison</div> <img
          src="https://www.topachat.com/_nuxt/img/assistance-header.df28f0c.jpg"
          class="cms-header-assistance-img br-10">
      </div>

      <div class="cms-layout grid grid_33-33-33 q-mt-lg">
        <div class="cms-block">
          <div class="cms-block__content" style="text-align: left;"><a
              href="https://www.topachat.com/p/assistance/suivi-de-ma-livraison/suivi-de-colis"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Suivi de mon
                  colis</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a
              href="https://www.topachat.com/p/assistance/suivi-de-ma-livraison/anomalie-de-suivi"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Le suivi du transporteur ne
                  fonctionne pas</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a
              href="https://www.topachat.com/p/assistance/suivi-de-ma-livraison/livraison-incomplete"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Livraison
                  incomplète</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a
              href="https://www.topachat.com/p/assistance/suivi-de-ma-livraison/contestation-de-livraison"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Colis indiqué livré, non reçu</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a
              href="https://www.topachat.com/p/assistance/suivi-de-ma-livraison/refus-de-colis"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Signaler un refus de
                  colis</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a
              href="https://www.topachat.com/p/assistance/suivi-de-ma-livraison/colis-abime"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">J'ai reçu un colis abîmé</span></span></a></div>
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
  name: 'SuiviedemaPage',
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
