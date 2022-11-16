<template>

  <div class="sep_h w-100"></div>

  <q-page style="min-height: auto;">

    <div class="cms-document cms-content content-wrapper">
      <div class="cms-header-assistance">
        <div class="cms-header-assistance-text bold br-10-b">Facturation, remboursements et bonus de
          commande</div> <img src="https://www.topachat.com/_nuxt/img/assistance-header.df28f0c.jpg"
          class="cms-header-assistance-img br-10">
      </div>

      <div class="cms-layout grid grid_25-25-25-25 q-mt-lg">
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/remboursements/bonus-commande"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Codes jeux et bonus des commandes</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a
              href="https://www.topachat.com/p/assistance/remboursements/modalites-des-remboursements"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Modalités des
                  remboursements</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/remboursements/avoirs"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Mes bons d'achat et avoirs</span></span></a></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/remboursements/documents"
              class="btn-assistance custom-link"><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Demande de documents</span></span></a></div>
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
  name: 'RemboursementsPage',
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
