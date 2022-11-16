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
            <h1>Tous les rayons Gaming</h1>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </div>
      <div class="cms-layout grid grid_25-25-25-25">
        <div class="cms-block prose">
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
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Périphériques
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
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_vr.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e3ff5ce5de42873613453.webp 50w,https://media.topachat.com/media/s60/619e3ff5ce5de42873613453.webp 60w,https://media.topachat.com/media/s100/619e3ff5ce5de42873613453.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e3ff5ce5de42873613453.jpg 50w,https://media.topachat.com/media/s60/619e3ff5ce5de42873613453.jpg 60w,https://media.topachat.com/media/s100/619e3ff5ce5de42873613453.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e3ff5ce5de42873613453.jpg"
                    alt="Casque VR" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_vr.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Casque
                    VR</span></a>
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
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_stream.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e4460a2cec2241f8504a3.webp 50w,https://media.topachat.com/media/s60/619e4460a2cec2241f8504a3.webp 60w,https://media.topachat.com/media/s100/619e4460a2cec2241f8504a3.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e4460a2cec2241f8504a3.jpg 50w,https://media.topachat.com/media/s60/619e4460a2cec2241f8504a3.jpg 60w,https://media.topachat.com/media/s100/619e4460a2cec2241f8504a3.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e4460a2cec2241f8504a3.jpg"
                    alt="Accessoires Streaming" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_stream.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Accessoires
                    Streaming</span></a>
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
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pcgam.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e444fce5de4287361b565.webp 50w,https://media.topachat.com/media/s60/619e444fce5de4287361b565.webp 60w,https://media.topachat.com/media/s100/619e444fce5de4287361b565.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e444fce5de4287361b565.jpg 50w,https://media.topachat.com/media/s60/619e444fce5de4287361b565.jpg 60w,https://media.topachat.com/media/s100/619e444fce5de4287361b565.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e444fce5de4287361b565.jpg"
                    alt="Gamepad" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pcgam.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Gamepad</span></a>
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
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pcvol.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e443b59095463b3521cf1.webp 50w,https://media.topachat.com/media/s60/619e443b59095463b3521cf1.webp 60w,https://media.topachat.com/media/s100/619e443b59095463b3521cf1.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e443b59095463b3521cf1.jpg 50w,https://media.topachat.com/media/s60/619e443b59095463b3521cf1.jpg 60w,https://media.topachat.com/media/s100/619e443b59095463b3521cf1.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e443b59095463b3521cf1.jpg"
                    alt="Volant" width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pcvol.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Volant</span></a>
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
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pcjoy.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e42daa5c58356de783454.webp 50w,https://media.topachat.com/media/s60/619e42daa5c58356de783454.webp 60w,https://media.topachat.com/media/s100/619e42daa5c58356de783454.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e42daa5c58356de783454.jpg 50w,https://media.topachat.com/media/s60/619e42daa5c58356de783454.jpg 60w,https://media.topachat.com/media/s100/619e42daa5c58356de783454.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e42daa5c58356de783454.jpg"
                    alt="Joysticks" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_pcjoy.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Joysticks</span></a>
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
                href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_bur.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e41a92572885fae306c3a.webp 50w,https://media.topachat.com/media/s60/619e41a92572885fae306c3a.webp 60w,https://media.topachat.com/media/s100/619e41a92572885fae306c3a.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e41a92572885fae306c3a.jpg 50w,https://media.topachat.com/media/s60/619e41a92572885fae306c3a.jpg 60w,https://media.topachat.com/media/s100/619e41a92572885fae306c3a.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e41a92572885fae306c3a.jpg"
                    alt="Bureau Gamer" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_gaming_puis_rubrique_est_wg_bur.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Bureau
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
      </div>
      <div class="cms-layout simple grid">
        <div class="cms-block prose">
          <div class="cms-block__content">
            <p><span class="font-size14">Le gaming, cette grande passion qui nous rassemble !<br>
                Performance à tout prix ou composants qui brillent de mille feux ? La question se pose, mais il y en a
                pour tous les goûts chez TopAchat. Plutôt nomade ? Retrouve nos <a
                  href="https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_w_porgam.html">PC
                  portables Gamer</a> et
                leurs accessoires dédiés pour jouer en déplacement comme il te semble.<br>
                Pour les plus sédentaires, nos <a
                  href="https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_w_pcgam_ta.html">PC
                  Gamer</a> ainsi
                qu’un large choix de périphériques dédiés sont là pour répondre à toutes tes envies ! De la simulation
                automobile à l’aviation, du casual gaming au jeu avancé en passant par le streaming, tu trouveras tout
                le nécessaire pour agrémenter ton setup sur mesure.</span></p>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </div>

      <div class="cms-layout simple grid">
        <div class="cms-block prose">
          <div class="cms-block__content">
            <hr>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
        <div class="cms-block prose center">
          <div class="cms-block__content">
            <h2><a href="https://www.topachat.com/pages/marque.php">TOP MARQUES GAMING</a></h2>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </div>
      <div class="cms-layout grid grid_8col">
        <div class="cms-block prose">
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
        <div class="cms-block prose">
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
        <div class="cms-block prose">
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
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_ROCCAT_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef01d35da751aa214d2e3.webp 50w,https://media.topachat.com/media/s60/634ef01d35da751aa214d2e3.webp 60w,https://media.topachat.com/media/s100/634ef01d35da751aa214d2e3.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef01d35da751aa214d2e3.jpg 50w,https://media.topachat.com/media/s60/634ef01d35da751aa214d2e3.jpg 60w,https://media.topachat.com/media/s100/634ef01d35da751aa214d2e3.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef01d35da751aa214d2e3.jpg"
                    alt="ROCCAT" width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_ROCCAT_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>ROCCAT</span></a>
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
                href="https://www.topachat.com/pages/lexique2_marque_est_RAZER_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef1e36a7cfc349303b1d7.webp 50w,https://media.topachat.com/media/s60/634ef1e36a7cfc349303b1d7.webp 60w,https://media.topachat.com/media/s100/634ef1e36a7cfc349303b1d7.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef1e36a7cfc349303b1d7.jpg 50w,https://media.topachat.com/media/s60/634ef1e36a7cfc349303b1d7.jpg 60w,https://media.topachat.com/media/s100/634ef1e36a7cfc349303b1d7.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef1e36a7cfc349303b1d7.jpg"
                    alt="RAZER" width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_RAZER_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>RAZER</span></a>
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
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_NOBLECHAIRS_puis_cat_est_accueil.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef1d9f23fca48437bb5e3.webp 50w,https://media.topachat.com/media/s60/634ef1d9f23fca48437bb5e3.webp 60w,https://media.topachat.com/media/s100/634ef1d9f23fca48437bb5e3.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef1d9f23fca48437bb5e3.jpg 50w,https://media.topachat.com/media/s60/634ef1d9f23fca48437bb5e3.jpg 60w,https://media.topachat.com/media/s100/634ef1d9f23fca48437bb5e3.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef1d9f23fca48437bb5e3.jpg"
                    alt="NOBLECHAIRS" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_NOBLECHAIRS_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>NOBLECHAIRS</span></a>
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
                href="https://www.topachat.com/pages/lexique2_marque_est_ELGATO_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef22b35da751aa214d2eb.webp 50w,https://media.topachat.com/media/s60/634ef22b35da751aa214d2eb.webp 60w,https://media.topachat.com/media/s100/634ef22b35da751aa214d2eb.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef22b35da751aa214d2eb.jpg 50w,https://media.topachat.com/media/s60/634ef22b35da751aa214d2eb.jpg 60w,https://media.topachat.com/media/s100/634ef22b35da751aa214d2eb.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef22b35da751aa214d2eb.jpg"
                    alt="ELGATO" width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_ELGATO_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>ELGATO</span></a>
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
  name: 'GamingPage',
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
