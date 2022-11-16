<template>

  <div class="sep_h w-100"></div>

  <q-page style="min-height: auto;">

    <div class="flex flex-center q-pa-xl" v-if="showLoader">
      <q-circular-progress indeterminate rounded size="50px" color="blue-4" class="q-ma-md" />
    </div>

    <div v-if="showOrdinateur" class="bg-white w-100 bon-plan tab content-wrapper">


      <div class="cms-layout simple grid">
        <div class="cms-block">
          <div class="cms-block__content">
            <h1>Tous les rayons Périphériques</h1>
          </div>
        </div>
      </div>

      <div class="cms-layout grid grid_6col">
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_moni.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e42dda5c58356de783470.webp 50w,https://media.topachat.com/media/s60/619e42dda5c58356de783470.webp 60w,https://media.topachat.com/media/s100/619e42dda5c58356de783470.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e42dda5c58356de783470.jpg 50w,https://media.topachat.com/media/s60/619e42dda5c58356de783470.jpg 60w,https://media.topachat.com/media/s100/619e42dda5c58356de783470.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e42dda5c58356de783470.jpg"
                    alt="Ecran PC" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_moni.html"
                  class="cms-linkblock__link custom-link bold clamp"><span>Ecran PC</span></a> <span data-v-2005928a=""
                  class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_acc_mon.html">Accessoires
                      Ecran PC</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pccas.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/623c979fb43e9727871b7984.webp 50w,https://media.topachat.com/media/s60/623c979fb43e9727871b7984.webp 60w,https://media.topachat.com/media/s100/623c979fb43e9727871b7984.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/623c979fb43e9727871b7984.jpg 50w,https://media.topachat.com/media/s60/623c979fb43e9727871b7984.jpg 60w,https://media.topachat.com/media/s100/623c979fb43e9727871b7984.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/623c979fb43e9727871b7984.jpg"
                    alt="Casque Gamer" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pccas.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Casque
                    Gamer</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pccla.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619f8d3da2cec2241f85ab10.webp 50w,https://media.topachat.com/media/s60/619f8d3da2cec2241f85ab10.webp 60w,https://media.topachat.com/media/s100/619f8d3da2cec2241f85ab10.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619f8d3da2cec2241f85ab10.jpg 50w,https://media.topachat.com/media/s60/619f8d3da2cec2241f85ab10.jpg 60w,https://media.topachat.com/media/s100/619f8d3da2cec2241f85ab10.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619f8d3da2cec2241f85ab10.jpg"
                    alt=" Clavier Gamer" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pccla.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span> Clavier
                    Gamer</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pcsou.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e45022cd9fe16f23990a5.webp 50w,https://media.topachat.com/media/s60/619e45022cd9fe16f23990a5.webp 60w,https://media.topachat.com/media/s100/619e45022cd9fe16f23990a5.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e45022cd9fe16f23990a5.jpg 50w,https://media.topachat.com/media/s60/619e45022cd9fe16f23990a5.jpg 60w,https://media.topachat.com/media/s100/619e45022cd9fe16f23990a5.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e45022cd9fe16f23990a5.jpg"
                    alt="Souris Gamer" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pcsou.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Souris
                    Gamer</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cam.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e3ed02572885fae302ab1.webp 50w,https://media.topachat.com/media/s60/619e3ed02572885fae302ab1.webp 60w,https://media.topachat.com/media/s100/619e3ed02572885fae302ab1.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e3ed02572885fae302ab1.jpg 50w,https://media.topachat.com/media/s60/619e3ed02572885fae302ab1.jpg 60w,https://media.topachat.com/media/s100/619e3ed02572885fae302ab1.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e3ed02572885fae302ab1.jpg"
                    alt="Webcam" width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cam.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Webcam</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_mic.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e3fe32572885fae302e3d.webp 50w,https://media.topachat.com/media/s60/619e3fe32572885fae302e3d.webp 60w,https://media.topachat.com/media/s100/619e3fe32572885fae302e3d.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e3fe32572885fae302e3d.jpg 50w,https://media.topachat.com/media/s60/619e3fe32572885fae302e3d.jpg 60w,https://media.topachat.com/media/s100/619e3fe32572885fae302e3d.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e3fe32572885fae302e3d.jpg"
                    alt="Micro" width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_mic.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Micro</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_encpc.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e3ecaa2cec2241f849cf3.webp 50w,https://media.topachat.com/media/s60/619e3ecaa2cec2241f849cf3.webp 60w,https://media.topachat.com/media/s100/619e3ecaa2cec2241f849cf3.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e3ecaa2cec2241f849cf3.jpg 50w,https://media.topachat.com/media/s60/619e3ecaa2cec2241f849cf3.jpg 60w,https://media.topachat.com/media/s100/619e3ecaa2cec2241f849cf3.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e3ecaa2cec2241f849cf3.jpg"
                    alt="Enceintes PC" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_encpc.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Enceintes
                    PC</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a href="/p/gamme/bureautique" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e43ffce5de4287361af4d.webp 50w,https://media.topachat.com/media/s60/619e43ffce5de4287361af4d.webp 60w,https://media.topachat.com/media/s100/619e43ffce5de4287361af4d.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e43ffce5de4287361af4d.jpg 50w,https://media.topachat.com/media/s60/619e43ffce5de4287361af4d.jpg 60w,https://media.topachat.com/media/s100/619e43ffce5de4287361af4d.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e43ffce5de4287361af4d.jpg"
                    alt="Bureautique" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/bureautique"
                  class="cms-linkblock__link custom-link bold clamp"><span>Bureautique</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_sourisb.html">Souris
                      Bureautique</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cla.html">Clavier
                      Bureautique</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wx_cas_m.html">Casque
                      Bureautique</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pctap.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e42b4ce5de42873618f80.webp 50w,https://media.topachat.com/media/s60/619e42b4ce5de42873618f80.webp 60w,https://media.topachat.com/media/s100/619e42b4ce5de42873618f80.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e42b4ce5de42873618f80.jpg 50w,https://media.topachat.com/media/s60/619e42b4ce5de42873618f80.jpg 60w,https://media.topachat.com/media/s100/619e42b4ce5de42873618f80.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e42b4ce5de42873618f80.jpg"
                    alt="Tapis de Souris" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pctap.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Tapis de
                    Souris</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_faut.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e42d6a2cec2241f84e5d5.webp 50w,https://media.topachat.com/media/s60/619e42d6a2cec2241f84e5d5.webp 60w,https://media.topachat.com/media/s100/619e42d6a2cec2241f84e5d5.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e42d6a2cec2241f84e5d5.jpg 50w,https://media.topachat.com/media/s60/619e42d6a2cec2241f84e5d5.jpg 60w,https://media.topachat.com/media/s100/619e42d6a2cec2241f84e5d5.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e42d6a2cec2241f84e5d5.jpg"
                    alt="Fauteuil Gamer" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_faut.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Fauteuil
                    Gamer</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cla_sou_puis_f_est_335-2741.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e440259095463b3521866.webp 50w,https://media.topachat.com/media/s60/619e440259095463b3521866.webp 60w,https://media.topachat.com/media/s100/619e440259095463b3521866.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e440259095463b3521866.jpg 50w,https://media.topachat.com/media/s60/619e440259095463b3521866.jpg 60w,https://media.topachat.com/media/s100/619e440259095463b3521866.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e440259095463b3521866.jpg"
                    alt="Pack Périphériques" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cla_sou_puis_f_est_335-2741.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Pack
                    Périphériques</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a href="/p/gamme/impression" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e43ae2572885fae30a6b1.webp 50w,https://media.topachat.com/media/s60/619e43ae2572885fae30a6b1.webp 60w,https://media.topachat.com/media/s100/619e43ae2572885fae30a6b1.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e43ae2572885fae30a6b1.jpg 50w,https://media.topachat.com/media/s60/619e43ae2572885fae30a6b1.jpg 60w,https://media.topachat.com/media/s100/619e43ae2572885fae30a6b1.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e43ae2572885fae30a6b1.jpg"
                    alt="Imprimante et Consommable" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/impression"
                  class="cms-linkblock__link custom-link bold clamp"><span>Imprimante et Consommable</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_imf.html">Imprimante</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wscan.html">Scanner</a>
                  </li>
                  <li><a href="/p/gamme/cartouches">Cartouches</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_toner.html">Toner</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_papier.html">Papier</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_nas.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e431da2cec2241f84ebbe.webp 50w,https://media.topachat.com/media/s60/619e431da2cec2241f84ebbe.webp 60w,https://media.topachat.com/media/s100/619e431da2cec2241f84ebbe.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e431da2cec2241f84ebbe.jpg 50w,https://media.topachat.com/media/s60/619e431da2cec2241f84ebbe.jpg 60w,https://media.topachat.com/media/s100/619e431da2cec2241f84ebbe.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e431da2cec2241f84ebbe.jpg" alt="NAS"
                    width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_nas.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>NAS</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a href="/p/gamme/reseaux-divers" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e450b59095463b3522c84.webp 50w,https://media.topachat.com/media/s60/619e450b59095463b3522c84.webp 60w,https://media.topachat.com/media/s100/619e450b59095463b3522c84.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e450b59095463b3522c84.jpg 50w,https://media.topachat.com/media/s60/619e450b59095463b3522c84.jpg 60w,https://media.topachat.com/media/s100/619e450b59095463b3522c84.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e450b59095463b3522c84.jpg"
                    alt="Réseaux divers" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/reseaux-divers"
                  class="cms-linkblock__link custom-link bold clamp"><span>Réseaux divers</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wt_wusb.html">Clé
                      WiFi USB</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wt_cpl.html">CPL</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wt_repw.html">Répéteur
                      WiFi</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wt_swi.html">Switch</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wt_wdiv.html">Accessoire
                      Réseau</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wt_rou.html">Modem
                      et
                      Routeur</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a href="/p/gamme/connectique-micro" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/622a1a497619dc533729c814.webp 50w,https://media.topachat.com/media/s60/622a1a497619dc533729c814.webp 60w,https://media.topachat.com/media/s100/622a1a497619dc533729c814.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/622a1a497619dc533729c814.jpg 50w,https://media.topachat.com/media/s60/622a1a497619dc533729c814.jpg 60w,https://media.topachat.com/media/s100/622a1a497619dc533729c814.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/622a1a497619dc533729c814.jpg"
                    alt="Connectique informatique" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/connectique-micro"
                  class="cms-linkblock__link custom-link bold clamp"><span>Connectique informatique</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_accboi.html">Câble
                      intégration</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_cb_div.html">Cable
                      divers /
                      Adaptateur</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_cb_ide.html">Câble
                      SATA</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cb_usb.html">Câble
                      USB</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cvi.html">Câble
                      vidéo
                      informatique</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_hub_usb.html">Hub
                      USB</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_res_comm.html">Commutateur
                      KVM</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wt_cab.html">Cable
                      Ethernet </a></li>
                </ul>
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_acq.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e4316a2cec2241f84eb25.webp 50w,https://media.topachat.com/media/s60/619e4316a2cec2241f84eb25.webp 60w,https://media.topachat.com/media/s100/619e4316a2cec2241f84eb25.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e4316a2cec2241f84eb25.jpg 50w,https://media.topachat.com/media/s60/619e4316a2cec2241f84eb25.jpg 60w,https://media.topachat.com/media/s100/619e4316a2cec2241f84eb25.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e4316a2cec2241f84eb25.jpg"
                    alt="Carte &amp; boitier d'acquisition" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_acq.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Carte &amp;
                    boitier d'acquisition</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a href="/p/gamme/peripheriques-gamer" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e417cce5de428736168e5.webp 50w,https://media.topachat.com/media/s60/619e417cce5de428736168e5.webp 60w,https://media.topachat.com/media/s100/619e417cce5de428736168e5.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e417cce5de428736168e5.jpg 50w,https://media.topachat.com/media/s60/619e417cce5de428736168e5.jpg 60w,https://media.topachat.com/media/s100/619e417cce5de428736168e5.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e417cce5de428736168e5.jpg"
                    alt="Périphériques Gamer" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/peripheriques-gamer"
                  class="cms-linkblock__link custom-link bold clamp"><span>Périphériques Gamer</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pccla.html">Clavier
                      Gamer</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pcsou.html">Souris
                      Gamer</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pccas.html">Casque
                      Gamer</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pctap.html">Tapis
                      de souris
                      Gamer</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a href="/p/gamme/stockage-externe" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e411aa2cec2241f84bdb9.webp 50w,https://media.topachat.com/media/s60/619e411aa2cec2241f84bdb9.webp 60w,https://media.topachat.com/media/s100/619e411aa2cec2241f84bdb9.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e411aa2cec2241f84bdb9.jpg 50w,https://media.topachat.com/media/s60/619e411aa2cec2241f84bdb9.jpg 60w,https://media.topachat.com/media/s100/619e411aa2cec2241f84bdb9.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e411aa2cec2241f84bdb9.jpg"
                    alt="Stockage Externe" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/stockage-externe"
                  class="cms-linkblock__link custom-link bold clamp"><span>Stockage Externe</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_dde.html">Disque
                      dur et SSD
                      externe</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_musb.html">Clé
                      USB</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_nas.html">NAS</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_boidd.html">Boitier
                      disque dur et
                      SSD</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_houdd.html">Housse
                      disque dur
                      externe</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_dock.html">Dock
                      pour disque
                      dur et SSD</a></li>
                  <li><a href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_mem.html">Carte
                      mémoire</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_tabgra.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e404f2cd9fe16f2392f75.webp 50w,https://media.topachat.com/media/s60/619e404f2cd9fe16f2392f75.webp 60w,https://media.topachat.com/media/s100/619e404f2cd9fe16f2392f75.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e404f2cd9fe16f2392f75.jpg 50w,https://media.topachat.com/media/s60/619e404f2cd9fe16f2392f75.jpg 60w,https://media.topachat.com/media/s100/619e404f2cd9fe16f2392f75.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e404f2cd9fe16f2392f75.jpg"
                    alt="Tablette Graphique" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_tabgra.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Tablette
                    Graphique</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_adamul.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e3e72a2cec2241f849797.webp 50w,https://media.topachat.com/media/s60/619e3e72a2cec2241f849797.webp 60w,https://media.topachat.com/media/s100/619e3e72a2cec2241f849797.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e3e72a2cec2241f849797.jpg 50w,https://media.topachat.com/media/s60/619e3e72a2cec2241f849797.jpg 60w,https://media.topachat.com/media/s100/619e3e72a2cec2241f849797.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e3e72a2cec2241f849797.jpg"
                    alt="Adaptateur Multimédia" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_adamul.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Adaptateur
                    Multimédia</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cla_sou.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e44c82572885fae30bc66.webp 50w,https://media.topachat.com/media/s60/619e44c82572885fae30bc66.webp 60w,https://media.topachat.com/media/s100/619e44c82572885fae30bc66.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e44c82572885fae30bc66.jpg 50w,https://media.topachat.com/media/s60/619e44c82572885fae30bc66.jpg 60w,https://media.topachat.com/media/s100/619e44c82572885fae30bc66.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e44c82572885fae30bc66.jpg"
                    alt="Pack Périphériques" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_cla_sou.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Pack
                    Périphériques</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_ond.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e4301ce5de4287361988d.webp 50w,https://media.topachat.com/media/s60/619e4301ce5de4287361988d.webp 60w,https://media.topachat.com/media/s100/619e4301ce5de4287361988d.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e4301ce5de4287361988d.jpg 50w,https://media.topachat.com/media/s60/619e4301ce5de4287361988d.jpg 60w,https://media.topachat.com/media/s100/619e4301ce5de4287361988d.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e4301ce5de4287361988d.jpg"
                    alt="Onduleur " width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_ond.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Onduleur
                  </span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_multi.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e41acce5de42873616f28.webp 50w,https://media.topachat.com/media/s60/619e41acce5de42873616f28.webp 60w,https://media.topachat.com/media/s100/619e41acce5de42873616f28.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e41acce5de42873616f28.jpg 50w,https://media.topachat.com/media/s60/619e41acce5de42873616f28.jpg 60w,https://media.topachat.com/media/s100/619e41acce5de42873616f28.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e41acce5de42873616f28.jpg"
                    alt="Multiprises protégées" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_w_multi.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Multiprises
                    protégées</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wac.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e450dce5de4287361c45e.webp 50w,https://media.topachat.com/media/s60/619e450dce5de4287361c45e.webp 60w,https://media.topachat.com/media/s100/619e450dce5de4287361c45e.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e450dce5de4287361c45e.jpg 50w,https://media.topachat.com/media/s60/619e450dce5de4287361c45e.jpg 60w,https://media.topachat.com/media/s100/619e450dce5de4287361c45e.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e450dce5de4287361c45e.jpg"
                    alt="Entretien divers" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_peripheriques_puis_rubrique_est_wac.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Entretien
                    divers</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
      </div>

      <div class="cms-layout simple grid">
        <div class="cms-block prose">
          <div class="cms-block__content">
            <p><span class="font-size14">Les périphériques englobent tout ce que tu peux relier à ton PC ou qui
                gravite autour de ton installation. Tu as ici le choix entre les plus grandes marques pour agrémenter
                ta configuration : clavier, souris, casque,… mais aussi périphériques de stockage, écrans, enceintes,
                accessoires de streaming,… Sans oublier les fauteuils gamer qui te garantiront une assise confortable
                pour les longues sessions d’hiver.<br>
                Autant d’éléments qui te permettront d’améliorer ton confort au quotidien tout en affirmant ta
                personnalité !</span></p>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </div>

      <div class="cms-layout grid grid_33-33-33">
        <div class="cms-block prose">
          <div class="cms-block__content"></div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block prose">
          <div class="cms-block__content">
            <hr>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </div>

      <div class="cms-layout grid grid_8col">
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_LOGITECH_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef1c8a4ddd44cb940e378.webp 50w,https://media.topachat.com/media/s60/634ef1c8a4ddd44cb940e378.webp 60w,https://media.topachat.com/media/s100/634ef1c8a4ddd44cb940e378.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef1c8a4ddd44cb940e378.jpg 50w,https://media.topachat.com/media/s60/634ef1c8a4ddd44cb940e378.jpg 60w,https://media.topachat.com/media/s100/634ef1c8a4ddd44cb940e378.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef1c8a4ddd44cb940e378.jpg"
                    alt="LOGITECH" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_LOGITECH_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>LOGITECH</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_ASUS_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef459d4ea4c3e1a216083.webp 50w,https://media.topachat.com/media/s60/634ef459d4ea4c3e1a216083.webp 60w,https://media.topachat.com/media/s100/634ef459d4ea4c3e1a216083.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef459d4ea4c3e1a216083.jpg 50w,https://media.topachat.com/media/s60/634ef459d4ea4c3e1a216083.jpg 60w,https://media.topachat.com/media/s100/634ef459d4ea4c3e1a216083.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef459d4ea4c3e1a216083.jpg"
                    alt="ASUS" width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_ASUS_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>ASUS</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_MSI_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef1cf35da751aa214d2e7.webp 50w,https://media.topachat.com/media/s60/634ef1cf35da751aa214d2e7.webp 60w,https://media.topachat.com/media/s100/634ef1cf35da751aa214d2e7.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef1cf35da751aa214d2e7.jpg 50w,https://media.topachat.com/media/s60/634ef1cf35da751aa214d2e7.jpg 60w,https://media.topachat.com/media/s100/634ef1cf35da751aa214d2e7.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef1cf35da751aa214d2e7.jpg" alt="MSI"
                    width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_MSI_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>MSI</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_AOC_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef443a4ddd44cb940e37c.webp 50w,https://media.topachat.com/media/s60/634ef443a4ddd44cb940e37c.webp 60w,https://media.topachat.com/media/s100/634ef443a4ddd44cb940e37c.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef443a4ddd44cb940e37c.jpg 50w,https://media.topachat.com/media/s60/634ef443a4ddd44cb940e37c.jpg 60w,https://media.topachat.com/media/s100/634ef443a4ddd44cb940e37c.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef443a4ddd44cb940e37c.jpg" alt="AOC"
                    width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_AOC_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>AOC</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_FOX%20SPIRIT_puis_cat_est_accueil.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef476180a56539666229c.webp 50w,https://media.topachat.com/media/s60/634ef476180a56539666229c.webp 60w,https://media.topachat.com/media/s100/634ef476180a56539666229c.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef476180a56539666229c.jpg 50w,https://media.topachat.com/media/s60/634ef476180a56539666229c.jpg 60w,https://media.topachat.com/media/s100/634ef476180a56539666229c.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef476180a56539666229c.jpg"
                    alt="FOX SPIRIT" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_FOX%20SPIRIT_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>FOX
                    SPIRIT</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_SAMSUNG_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef493a4ddd44cb940e386.webp 50w,https://media.topachat.com/media/s60/634ef493a4ddd44cb940e386.webp 60w,https://media.topachat.com/media/s100/634ef493a4ddd44cb940e386.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef493a4ddd44cb940e386.jpg 50w,https://media.topachat.com/media/s60/634ef493a4ddd44cb940e386.jpg 60w,https://media.topachat.com/media/s100/634ef493a4ddd44cb940e386.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef493a4ddd44cb940e386.jpg"
                    alt="SAMSUNG" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_SAMSUNG_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>SAMSUNG</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_HYPERX_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef1be6a7cfc349303b1d3.webp 50w,https://media.topachat.com/media/s60/634ef1be6a7cfc349303b1d3.webp 60w,https://media.topachat.com/media/s100/634ef1be6a7cfc349303b1d3.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef1be6a7cfc349303b1d3.jpg 50w,https://media.topachat.com/media/s60/634ef1be6a7cfc349303b1d3.jpg 60w,https://media.topachat.com/media/s100/634ef1be6a7cfc349303b1d3.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef1be6a7cfc349303b1d3.jpg"
                    alt="HYPER X" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_HYPERX_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>HYPER
                    X</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
          <!---->
        </div>
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_CORSAIR_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef1b1ab43904ad9590513.webp 50w,https://media.topachat.com/media/s60/634ef1b1ab43904ad9590513.webp 60w,https://media.topachat.com/media/s100/634ef1b1ab43904ad9590513.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef1b1ab43904ad9590513.jpg 50w,https://media.topachat.com/media/s60/634ef1b1ab43904ad9590513.jpg 60w,https://media.topachat.com/media/s100/634ef1b1ab43904ad9590513.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef1b1ab43904ad9590513.jpg"
                    alt="CORSAIR" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_CORSAIR_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>CORSAIR</span></a>
                <!---->
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div></div>
            </div>
          </div>
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
import footerBloc from 'src/components/Footer.vue'

export default defineComponent({
  name: 'PeriPage',
  components: {
    footerBloc
  },
  data() {
    return {
      showLoader: true,
      showOrdinateur: false
    }
  },
  setup() {
    return {

    }
  },
  mounted() {

    setTimeout(() => {
      this.showLoader = false
      this.showOrdinateur = true
    }, 1500);

  }
})
</script>
