<template>

  <div class="sep_h w-100"></div>

  <q-page class="flex flex-center home-height">

    <div class="bg-white w-100">
      <div class="cms-document cms-content content-wrapper">
        <div class="cms-header-assistance">
          <div class="cms-header-assistance-text bold br-10-b">Rétractation : Retourner sa commande
            pour l'annuler</div> <img src="https://www.topachat.com/_nuxt/img/assistance-header.df28f0c.jpg"
            class="cms-header-assistance-img br-10">
        </div>

        <div class="cms-layout simple grid">
          <div class="cms-block prose">
            <div class="cms-block__content">
              <p><strong>Tu bénéficies de la garantie “satisfait ou remboursé” sur les produits vendus et expédiés par
                  Top Achat.</strong></p>
              <h1>Les conditions</h1>
              <p>Tu as 14 jours, à compter du jour de réception des produits, pour nous retourner les articles qui ne te
                conviennent pas. <strong>Seuls les produits retournés complets, dans leur emballage d'origine et en
                  parfait état de revente seront acceptés</strong>. Ainsi, les produits doivent impérativement être
                sur-emballés pour le transport.</p>
              <h1>Exceptions</h1>
              <p>Dans le cas des <strong>produits « consommables » (logiciels, DVD, jeux vidéo ou cartouches par
                  exemple)</strong>, la procédure de rétractation ne s'applique que si leur film plastique d'origine est
                intact (conformément aux dispositions de nos <a
                  href="https://media.ldlc.com/pdf/topachat/fr/fr/cgv.pdf">CGV</a>).</p>
              <div class="cms-message cms-message--alert">
                <p>Les produits issus du montage PC ne peuvent faire l'objet d'une rétractation car ils sont considérés
                  comme une commande personnalisée (c'est-à-dire assemblée sur-mesure à ta demande et selon tes
                  spécifications).</p>
              </div>
              <h1>Délai de remboursement</h1>
              <p>Nous te remboursons en moyenne sous 5 à 8 jours ouvrés, à compter de la réception à l'entrepôt. Au plus
                tard sous 14 jours à compter de ta demande.</p>
              <div class="cms-message cms-message--warning cms-message--small">
                <p>Les services consommés ne font pas l'objet d'un remboursement.</p>
              </div>
              <h1>Coût de renvoi des produits</h1>
              <div class="cms-message cms-message--alert cms-message--small">
                <p>L'envoi d'un bon prépayé pour le renvoi des articles en cas de rétractation n'est pas systématique.
                </p>
              </div>
              <h1>S'agissant des produits encombrants</h1>
              <p>De par leur nature (poids, encombrement), certains produits tels que les téléviseurs, les imprimantes
                multifonctions, les écrans de projection...
                ne peuvent pas être renvoyés par les services de La Poste.
                Le coût de renvoi indicatif en cas de rétractation est disponible sur ce tableau.</p>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Calberson (FR, Belgique, Suisse, Luxembourg), par tranche de poids</th>
                      <th>France</th>
                      <th>Corse</th>
                      <th>Dom Tom</th>
                      <th>Suisse/Europe</th>
                      <th>Belgique/Luxembourg</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td><strong>Prix TTC</strong></td>
                      <td><strong>Prix TTC</strong></td>
                      <td><strong>Prix TTC</strong></td>
                      <td><strong>Prix TTC</strong></td>
                      <td><strong>Prix TTC</strong></td>
                    </tr>
                    <tr>
                      <td><strong>30 - 39kg</strong></td>
                      <td>50.00 €</td>
                      <td>75.00 €</td>
                      <td>750.00 €</td>
                      <td>75.00 €</td>
                      <td>70.00 €</td>
                    </tr>
                    <tr>
                      <td><strong>40 - 49kg</strong></td>
                      <td>60.00 €</td>
                      <td>85.00 €</td>
                      <td>900.00 €</td>
                      <td>85.00 €</td>
                      <td>80.00 €</td>
                    </tr>
                    <tr>
                      <td><strong>50 - 59kg</strong></td>
                      <td>70.00 €</td>
                      <td>95.00 €</td>
                      <td>1100.00 €</td>
                      <td>95.00 €</td>
                      <td>90.00 €</td>
                    </tr>
                    <tr>
                      <td><strong>60 - 69kg</strong></td>
                      <td>80.00 €</td>
                      <td>105.00 €</td>
                      <td>1300.00 €</td>
                      <td>100.00 €</td>
                      <td>100.00 €</td>
                    </tr>
                    <tr>
                      <td><strong>&gt;70 kg par tranche de 10 kg</strong></td>
                      <td>+10.00 €</td>
                      <td>+15.00 €</td>
                      <td>-</td>
                      <td>+15.00 €</td>
                      <td>+15.00 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Tu peux demander l’organisation d’un retour en rétractation en utilisant le formulaire
                  ci-dessous.</strong></p>
              <div class="flex-container space-around"><a href="/p/assistance/formulaire/retractation"
                  class="btn btn--with-icon"><span class="icon icon--textdocument"></span><span>Demande de
                    rétractation</span></a><a href="tel:0428010020" class="btn btn--with-icon btn--phone"><span
                    class="icon icon--phone"></span><span>04 28 01 00 20</span></a></div>
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
  name: 'RetractationPage',
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
