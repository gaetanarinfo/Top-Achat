<template>

  <div class="q-pa-md w-100 footer">

    <div class="footer-main__links">

      <div class="footer-main__bloc">

        <q-item style="min-height: auto;" to="vente-flash" class="footer-main__link q-pa-none q-ma-none">Toutes
          nos ventes
          flash</q-item>

        <q-item style="min-height: auto;" to="bon-plan" class="footer-main__link q-pa-none q-ma-none">Code promo / Offre
          de
          remboursement</q-item>

        <q-item style="min-height: auto;" to="nouveautes" class="footer-main__link q-pa-none q-ma-none">Nouveautés
          du jour</q-item>

        <q-item style="min-height: auto;" to="collecte-des-avis" class="footer-main__link q-pa-none q-ma-none">
          Comment sont collectés les avis ?
        </q-item>

      </div>

      <div class="footer-main__bloc">

        <q-item to="/livraison" class="footer-main__link q-pa-none q-ma-none" style="min-height: auto;">Livraison
        </q-item>

        <q-item style="min-height: auto;" to="retractation" class="footer-main__link q-pa-none q-ma-none">
          Formulaire
          de
          rétractation</q-item>

        <q-item style="min-height: auto;" to="cookies-et-trackers" class="footer-main__link q-pa-none q-ma-none">Cookies
          et
          trackers</q-item>

      </div>

      <div class="footer-main__bloc">
        <q-item to="/marque" class="footer-main__link q-pa-none q-ma-none" style="min-height: auto;">Recherche par
          marque</q-item>
        <q-item to="/plan" class="footer-main__link q-pa-none q-ma-none" style="min-height: auto;">Plan du site</q-item>
        <a href="https://media.ldlc.com/pdf/topachat/fr/fr/cgv.pdf" class="footer-main__link">Conditions Générales de
          vente</a><br> <a href="https://www.groupe-ldlc.com/donnees-personnelles/" class="footer-main__link">Vie
          Privée</a><br>
      </div>

      <div class="footer-main__bloc">

        <q-item style="min-height: auto;" to="bon-plan" class="footer-main__link q-pa-none q-ma-none">Offres spéciales
        </q-item>

        <q-item to="/soldes" class="footer-main__link q-pa-none q-ma-none" style="min-height: auto;">Soldes</q-item>

        <q-item to="/paiement" class="footer-main__link q-pa-none q-ma-none" style="min-height: auto;">Paiements
          sécurisés</q-item><br><br>

        <img src="https://www.topachat.com/_nuxt/img/paiements-400.4d58469.png"
          srcset="https://www.topachat.com/_nuxt/img/paiements-400.4d58469.png, https://www.topachat.com/_nuxt/img/paiements-800.e3022ed.png 2x"
          alt="moyens de paiement" width="400" height="36" loading="lazy" class="footer-main__payements">
      </div>

      <div data-fetch-key="1" class="footer-cms-part">

        <div class="footer-main__separator"></div>

        <span>
          <p>Top Achat : <a href="https://www.topachat.com/pages/nouveautes.php">Nouveautés</a> - <a
              href="https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_w_pcgam_ta.html">PC
              Gamer</a> - <a
              href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_moni.html">Ecran
              PC</a> - <a href="https://www.topachat.com/pages/configomatic.php">PC sur mesure</a> - <a
              href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr.html">Processeur</a> -
            <a href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_faut.html">Fauteuil
              Gamer</a> - <a
              href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ssd.html">SSD</a> - <a
              href="https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_wport.html">PC
              portable</a> - <a
              href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie.html">Carte
              graphique</a> - <a href="https://www.topachat.com/p/gamme/peripheriques-gamer">Périphériques Gamer</a> -
            <a href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ali.html">Alimentation
              PC</a> - <a href="https://www.topachat.com/p/gamme/carte-mere">Carte Mère</a>
          </p>
        </span>

        <div class="footer-main__separator"></div>

      </div>

    </div>

    <div class="footer-main__socials"><a href="https://www.facebook.com/topachat" class="footer-main__social-link"><img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMTAiIGZpbGw9IiMzQjU5OTgiLz4KPHBhdGggZD0iTTI1LjUxMDUgOC4wMDQ3OUwyMi4zOTIzIDhDMTguODg5MyA4IDE2LjYyNTQgMTAuMjIxNyAxNi42MjU0IDEzLjY2MDNWMTYuMjcwMUgxMy40OTAzQzEzLjIxOTQgMTYuMjcwMSAxMyAxNi40ODAyIDEzIDE2LjczOTNWMjAuNTIwNkMxMyAyMC43Nzk4IDEzLjIxOTYgMjAuOTg5NiAxMy40OTAzIDIwLjk4OTZIMTYuNjI1NFYzMC41MzFDMTYuNjI1NCAzMC43OTAyIDE2Ljg0NDggMzEgMTcuMTE1NyAzMUgyMS4yMDYxQzIxLjQ3NzEgMzEgMjEuNjk2NCAzMC43ODk5IDIxLjY5NjQgMzAuNTMxVjIwLjk4OTZIMjUuMzYyMUMyNS42MzMgMjAuOTg5NiAyNS44NTI0IDIwLjc3OTggMjUuODUyNCAyMC41MjA2TDI1Ljg1MzkgMTYuNzM5M0MyNS44NTM5IDE2LjYxNDkgMjUuODAyMSAxNi40OTU4IDI1LjcxMDMgMTYuNDA3N0MyNS42MTg1IDE2LjMxOTcgMjUuNDkzNCAxNi4yNzAxIDI1LjM2MzQgMTYuMjcwMUgyMS42OTY0VjE0LjA1NzhDMjEuNjk2NCAxMi45OTQ0IDIxLjk2MTMgMTIuNDU0NiAyMy40MDk1IDEyLjQ1NDZMMjUuNTEgMTIuNDUzOUMyNS43ODA2IDEyLjQ1MzkgMjYgMTIuMjQzOCAyNiAxMS45ODQ5VjguNDczNzdDMjYgOC4yMTUxMSAyNS43ODA5IDguMDA1MjYgMjUuNTEwNSA4LjAwNDc5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
          alt="Facebook" loading="lazy" width="40" height="40" class="footer-main__social-icon"></a> <a
        href="https://twitter.com/TopAchat" class="footer-main__social-link"><img
          src="https://www.topachat.com/_nuxt/img/twitter.98a2306.svg" alt="Twitter" loading="lazy" width="40"
          height="40" class="footer-main__social-icon"></a> <a href="https://www.instagram.com/topachat/"
        class="footer-main__social-link"><img src="https://www.topachat.com/_nuxt/img/instagram.6ad1ecf.svg"
          alt="instagram" loading="lazy" width="40" height="40" class="footer-main__social-icon"></a> <a
        href="https://www.tiktok.com/@topachat?lang=fr" class="footer-main__social-link"><img
          src="https://www.topachat.com/_nuxt/img/tiktok.a6474de.svg" alt="tiktok" loading="lazy" width="40" height="40"
          class="footer-main__social-icon"></a> <a href="https://www.twitch.tv/topachat"
        class="footer-main__social-link"><img src="http://api-top-achat.fun:5000/icons/twitch.svg" alt="twitch"
          loading="lazy" width="40" height="40" style="width: 35px;" class="
						footer-main__social-icon
						footer-main__social-icon--portrait
					"></a> <a href="https://discord.com/invite/topachat" class="footer-main__social-link"><img
          src="https://www.topachat.com/_nuxt/img/discord.1a0c3dc.svg" alt="discord" loading="lazy" width="71"
          height="55" class="footer-main__social-icon"></a></div>

    <div class="footer-main__separator"></div>

    <div class="footer-main__text text-center">
      TopAchat, site de vente en ligne spécialiste en informatique.
      Nous te proposons des produits high-tech et gamer avec un tas de
      <a href="https://www.topachat.com/pages/nouveautes.php" class="">nouveautés</a>
      chaque jour et un outil pour réaliser ton
      <a href="https://www.topachat.com/pages/configomatic.php" class="">PC sur mesure</a>
      ! Les photos des produits ne sont pas contractuelles; le produit
      ne comprend pas forcément tous les éléments de la photo. Se
      référer à la fiche détaillée du produit pour plus
      d'informations.<br><br>
      © {{ new Date().getFullYear() }} / Gaëtan Seigneur
    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterBloc',
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
