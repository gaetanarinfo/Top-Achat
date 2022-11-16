<template>

  <div class="sep_h w-100"></div>

  <q-page class="flex flex-center home-height">

    <div class="bg-white w-100">

      <div class="cms-document cms-content content-wrapper">
        <!---->
        <!---->
        <div class="cms-layout simple">
          <div class="cms-block prose">
            <div class="cms-block__content">
              <div class="cms-message cms-message--infos">
                <p><strong>Dans un souci de confidentialité de votre navigation, TOP ACHAT a choisi d'utiliser un
                    minimum de traceurs externes.</strong>*<br>
                  Par exemple, il n'y a pas de tracker Facebook sur le Site.</p>
              </div>
              <h3>Quels sont les cookies, tags et traceurs utilisés sur le site TopAchat ?</h3>
              <p>Les cookies émis par TOP ACHAT sur le site vous permettent, en tant qu'utilisateur, de bénéficier de
                façon optimale et personnalisée des services proposés par TOP ACHAT.<br>
                Ainsi, les cookies nous permettent :</p>
              <ul>
                <li>de mémoriser vos préférences d'affichage (langue utilisée, paramètres d'affichage, système
                  d'exploitation utilisé, etc) et d'adapter la présentation du Site lors de vos visites, selon les
                  matériels et logiciels de visualisation ou de lecture que comporte votre terminal et qui sont utilisés
                  pour la navigation sur le Site.</li>
                <li>de mémoriser les informations relatives, par exemple, à un formulaire que vous avez rempli ou à un
                  service (inscription, accès à son compte) ou une information que vous avez choisi (services souscrits,
                  contenu de son panier).</li>
                <li>de vous permettre d'accéder à des espaces réservés et personnels du Site ou de ses Services, tels
                  que votre compte personnel, grâce à des identifiants ou des données personnelles vous concernant
                  antérieurement communiquées, vous permettant le cas échéant d'accéder à des contenus personnalisés,
                </li>
                <li>de mettre en œuvre des mesures de sécurité.</li>
                <li>de mesurer et d'analyser la fréquentation et d'utilisation du site, de ses rubriques et services
                  proposés, permettant à TOP ACHAT de réaliser des études et d'améliorer l'intérêt et l'ergonomie du
                  site et de ses services,</li>
              </ul>
              <div class="cms-message cms-message--infos">
                <p>Pour la mesure d'audience le Site utilise uniquement Matomo qui est un des seuls services 100%
                  compatibles avec les recommandations de la CNIL.
                  (cf <a href="https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience">page d'information
                    de la CNIL</a>)</p>
              </div>
              <p>**Néanmoins vous pouvez choisir de ne pas être comptabilisé en décochant sur <a
                  href="https://tracking.topachat.com/index.php?module=CoreAdminHome&amp;action=optOut&amp;language=fr&amp;backgroundColor=&amp;fontColor=&amp;fontSize=14px&amp;fontFamily=Calibri">cette
                  page</a></p>
              <p>Pour vérifier les trackers externes présents sur un site, nous vous conseillons d'utiliser un plugin
                navigateur comme Kimetrak.
                (cf <a
                  href="https://www.nextinpact.com/news/105881-kimetrak-quels-sites-multiplient-services-pistage.htm">cet
                  article détaillé</a>)</p>
              <p><strong>Pour respecter un maximum votre vie privée, TopAchat a choisi de ne pas afficher de
                  publicité.</strong>
                (Ainsi, pas de retargeting ni de remarketing)</p>
              <p>*<em>afin de pouvoir rémunérer nos partenaires affiliés via la plateforme Affilae, nous utilisons un
                  cookie tiers et un tracker externe pour ce service.</em>
                <em>(Aucune donnée personnelle n'est transmise à Affilae, uniquement un identifiant anonymisé de
                  commande)</em>
              </p>
              <h3>Qui contacter en cas de difficultés ?</h3>
              <p>Pour toutes questions, vous pouvez nous contacter via cette adresse mail :<br>
                <a href="mailto:privacy@topachat.com">privacy@topachat.com</a>
              </p>
              <p>ou par courrier :<br>
                GROUPE LDLC - Délégué à la Protection des données personnelles<br>
                2 rue des Érables CS21035<br>
                69578 Limonest cedex.</p>
            </div>
            <!---->
            <!---->
            <!---->
            <!---->
          </div>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <footerBloc />

  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import footerBloc from 'src/components/Footer.vue'

export default defineComponent({
  name: 'CookiesPage',
  components: {
    footerBloc
  },
  setup() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
})
</script>
