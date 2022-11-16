<template>

  <div class="w-100">

    <div class="bg-white w-100 flex-center flex" style="flex-wrap: nowrap;flex-direction: row;margin-top: 60px;">

      <q-item class="title-item text-start w-100 d-flex flex-center"
        style="position: relative;top: -30px;letter-spacing: 1px;font-size: 22px;font-weight: 400;font-weight: 700;display: block;">
        Ordinateurs
      </q-item>

      <q-item style="position: relative;top: -60px;">
        <img width="100" src="https://media.topachat.com/media/s200/62ce860743e05814790ae4ab.webp" alt="">
      </q-item>

    </div>

    <div class="bg-white" style="position: relative;top: -45px;height: 315px;">

      <q-list>
        <q-item clickable @click="loadUrl('https://www.topachat.com/pages/configomatic.php')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">PC sur mesure</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_w_pcgam_ta.html')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">PC Gamer</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_w_porgam.html ')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">PC portables Gamer</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_wport.html')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">PC portables</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable @click="loadUrl('https://www.topachat.com/pages/configomatic.php')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Configuration ordinateur</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </div>

    <div class="bg-white w-100 flex-center flex"
      style="flex-wrap: nowrap;flex-direction: row;flex-direction: row-reverse;margin-top: 30px;">

      <q-item class="title-item text-start w-100 d-flex flex-center"
        style="position: relative;top: -30px;letter-spacing: 1px;font-size: 22px;font-weight: 400;font-weight: 700;display: block;text-align: right;">
        Composants
      </q-item>

      <q-item style="position: relative;top: -60px;">
        <img width="100" src="https://media.topachat.com/media/s200/62ce8e2543e05814790ae609.webp" alt="">
      </q-item>

    </div>

    <div class="bg-white" style="position: relative;top: -45px;height: 315px;">

      <q-list>
        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie.html')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Cartes Graphiques</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr.html')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Processeurs</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable @click="loadUrl('https://www.topachat.com/p/gamme/ram-memoire-pc')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">RAM</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable @click="loadUrl('https://www.topachat.com/p/gamme/carte-mere')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Carte mère</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ssd.html')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">SSD</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </div>

    <div class="bg-white w-100 flex-center flex" style="flex-wrap: nowrap;flex-direction: row;margin-top: 30px;">

      <q-item class="title-item text-start w-100 d-flex flex-center"
        style="position: relative;top: -30px;letter-spacing: 1px;font-size: 22px;font-weight: 400;font-weight: 700;display: block;">
        Gaming
      </q-item>

      <q-item style="position: relative;top: -60px;">
        <img width="100" src="https://media.topachat.com/media/s200/62ce8dfd93c9c43b8366fffd.webp" alt="">
      </q-item>

    </div>

    <div class="bg-white" style="position: relative;top: -45px;height: 315px;">

      <q-list>
        <q-item clickable @click="loadUrl('https://www.topachat.com/pages/configomatic.php')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">PC sur mesure</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_w_pcgam_ta.html')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">PC Gamer</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_w_porgam.html ')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">PC portables Gamer</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_wport.html')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">PC portables</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable @click="loadUrl('https://www.topachat.com/pages/configomatic.php')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Configuration ordinateur</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </div>

    <div class="bg-white w-100 flex-center flex"
      style="flex-wrap: nowrap;flex-direction: row;flex-direction: row-reverse;margin-top: 30px;">

      <q-item class="title-item text-start w-100 d-flex flex-center"
        style="position: relative;top: -30px;letter-spacing: 1px;font-size: 22px;font-weight: 400;font-weight: 700;display: block;text-align: right;">
        Périphériques
      </q-item>

      <q-item style="position: relative;top: -60px;">
        <img width="100" src="https://media.topachat.com/media/s200/62ce8d1176994e21892e20c3.webp" alt="">
      </q-item>

    </div>

    <div class="bg-white" style="position: relative;top: -45px;height: 315px;">

      <q-list>
        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_moni.html')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Écran</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable @click="loadUrl('https://www.topachat.com/p/gamme/peripheriques-gamer')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Périphériques Gamer</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable @click="loadUrl('https://www.topachat.com/p/gamme/stockage-externe')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Stockage externe</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable @click="loadUrl('https://www.topachat.com/p/gamme/bureautique')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Bureautique</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable
          @click="loadUrl('https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cam.html')">
          <q-item-section>
            <q-item-label style="font-size: 18px;">Webcam</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ConfigSemaineHome',
  data() {
    return {
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

  }
})
</script>
