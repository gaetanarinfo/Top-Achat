<template>

  <div class="sep_h w-100"></div>

  <q-page style="min-height: auto;">

    <div class="bg-white w-100 content-wrapper">

      <div class="cms-header-assistance">
        <div class="cms-header-assistance-text bold br-10-b">Besoin d'aide ?</div> <img
          src="https://www.topachat.com/_nuxt/img/assistance-header.df28f0c.jpg"
          class="cms-header-assistance-img br-10">
      </div>
      <!---->
      <div class="cms-layout grid grid_33-33-33">
        <div class="cms-block">
          <div class="cms-block__content">
            <q-item tag="a" to="avant-ma-commande" class="btn-assistance custom-link">
              <q-icon name="info" class="icon"></q-icon><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Avant ma commande</span><span
                  class="btn-assistance__description">ConfigoMatic / Conseil / Stocks / Prix / Modes de livraison /
                  Modes de règlement / Garanties</span></span>
            </q-item>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content">
            <q-item tag="a" to="suivi-avant-livraison" class="btn-assistance custom-link">
              <q-icon name="home" class="icon"></q-icon><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Ma commande n'est pas encore
                  expédiée</span><span class="btn-assistance__description">Information / Modification / Annulation
                  d'une commande en préparation</span></span>
            </q-item>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content">
            <q-item tag="a" to="suivi-de-ma-livraison" class="btn-assistance custom-link">
              <q-icon name="send" class="icon"></q-icon><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Suivi de ma
                  livraison</span><span class="btn-assistance__description">Suivre mon colis / Signaler une avarie
                  liée au transport d'un colis.</span></span>
            </q-item>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content">
            <q-item tag="a" to="sav" class="btn-assistance custom-link">
              <q-icon name="help" class="icon"></q-icon><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">SAV : Garanties et
                  retours</span><span class="btn-assistance__description">Assistance pour une première mise en route
                  / Dépannage / Retour SAV</span></span>
            </q-item>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content">
            <q-item tag="a" to="remboursements" class="btn-assistance custom-link">
              <q-icon name="description" class="icon"></q-icon><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Facturation, Remboursements
                  &amp; bonus de commande</span><span class="btn-assistance__description">Remboursement / Avoir /
                  Bon d'achat / code jeux / ODR / Facture</span></span>
            </q-item>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block">
          <div class="cms-block__content"><a href="https://www.topachat.com/p/assistance/mon-compte"
              class="btn-assistance custom-link">
              <q-icon name="person" class="icon"></q-icon><span class="btn-assistance__text"><span
                  class="btn-assistance__title muli">Mon compte</span><span class="btn-assistance__description">Gestion
                  du compte client / Données
                  personnelles</span></span>
            </a></div>
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
  name: 'AssistancePage',
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
