<template>

  <div class="sep_h w-100"></div>

  <q-page style="min-height: auto;">

    <div class="flex flex-center q-pa-xl" v-if="showLoader">
      <q-circular-progress indeterminate rounded size="50px" color="blue-4" class="q-ma-md" />
    </div>

    <div v-if="showOrdinateur" class="bg-white w-100 bon-plan tab content-wrapper">

      <!---->
      <!---->
      <div class="cms-layout simple grid">

        <div class="cms-block">
          <div class="cms-block__content">
            <h1>Tous les rayons Composants</h1>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </div>

      <div class="cms-layout grid grid_25-25-25-25">
        <div class="cms-block">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e40a52572885fae304952.webp 50w,https://media.topachat.com/media/s60/619e40a52572885fae304952.webp 60w,https://media.topachat.com/media/s100/619e40a52572885fae304952.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e40a52572885fae304952.jpg 50w,https://media.topachat.com/media/s60/619e40a52572885fae304952.jpg 60w,https://media.topachat.com/media/s100/619e40a52572885fae304952.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e40a52572885fae304952.jpg"
                    alt="Processeur" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr.html"
                  class="cms-linkblock__link custom-link bold clamp"><span>Processeur</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr_puis_marque_est_INTEL.html">Processeur
                      Intel</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr_puis_marque_est_AMD.html">Processeur
                      AMD</a></li>
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
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/6242d2a19c01aa1e89593fdc.webp 50w,https://media.topachat.com/media/s60/6242d2a19c01aa1e89593fdc.webp 60w,https://media.topachat.com/media/s100/6242d2a19c01aa1e89593fdc.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/6242d2a19c01aa1e89593fdc.jpg 50w,https://media.topachat.com/media/s60/6242d2a19c01aa1e89593fdc.jpg 60w,https://media.topachat.com/media/s100/6242d2a19c01aa1e89593fdc.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/6242d2a19c01aa1e89593fdc.jpg"
                    alt="Carte graphique" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Carte
                    graphique</span></a>
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
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_boi_sa.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e43a72572885fae30a5e3.webp 50w,https://media.topachat.com/media/s60/619e43a72572885fae30a5e3.webp 60w,https://media.topachat.com/media/s100/619e43a72572885fae30a5e3.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e43a72572885fae30a5e3.jpg 50w,https://media.topachat.com/media/s60/619e43a72572885fae30a5e3.jpg 60w,https://media.topachat.com/media/s100/619e43a72572885fae30a5e3.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e43a72572885fae30a5e3.jpg"
                    alt="Boitier PC" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_boi_sa.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Boitier
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
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ali.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e43012572885fae30961f.webp 50w,https://media.topachat.com/media/s60/619e43012572885fae30961f.webp 60w,https://media.topachat.com/media/s100/619e43012572885fae30961f.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e43012572885fae30961f.jpg 50w,https://media.topachat.com/media/s60/619e43012572885fae30961f.jpg 60w,https://media.topachat.com/media/s100/619e43012572885fae30961f.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e43012572885fae30961f.jpg"
                    alt="Alimentation PC" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ali.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Alimentation
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
            <div class="cms-linkblock__main"><a href="/p/gamme/carte-mere" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/61dc51bdd625187ccd7a5c3e.webp 50w,https://media.topachat.com/media/s60/61dc51bdd625187ccd7a5c3e.webp 60w,https://media.topachat.com/media/s100/61dc51bdd625187ccd7a5c3e.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/61dc51bdd625187ccd7a5c3e.jpg 50w,https://media.topachat.com/media/s60/61dc51bdd625187ccd7a5c3e.jpg 60w,https://media.topachat.com/media/s100/61dc51bdd625187ccd7a5c3e.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/61dc51bdd625187ccd7a5c3e.jpg"
                    alt="Carte Mère" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/carte-mere"
                  class="cms-linkblock__link custom-link bold clamp"><span>Carte Mère</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_cm_1700.html">Carte
                      Mère socket
                      1700</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_cm_am4.html">Carte
                      Mère socket
                      AM4</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_cm_1200.html">Carte
                      Mère socket
                      1200</a></li>
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
            <div class="cms-linkblock__main"><a href="/p/gamme/stockage" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e427fa2cec2241f84df58.webp 50w,https://media.topachat.com/media/s60/619e427fa2cec2241f84df58.webp 60w,https://media.topachat.com/media/s100/619e427fa2cec2241f84df58.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e427fa2cec2241f84df58.jpg 50w,https://media.topachat.com/media/s60/619e427fa2cec2241f84df58.jpg 60w,https://media.topachat.com/media/s100/619e427fa2cec2241f84df58.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e427fa2cec2241f84df58.jpg"
                    alt="Stockage" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/stockage"
                  class="cms-linkblock__link custom-link bold clamp"><span>Stockage</span></a> <span data-v-2005928a=""
                  class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ssd.html">SSD</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ssd_puis_f_est_793-10908.html">m2
                      nvme</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wdi_sata.html">Disque
                      Dur</a></li>
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
            <div class="cms-linkblock__main"><a href="/p/gamme/ram-memoire-pc" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e4399a2cec2241f84f504.webp 50w,https://media.topachat.com/media/s60/619e4399a2cec2241f84f504.webp 60w,https://media.topachat.com/media/s100/619e4399a2cec2241f84f504.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e4399a2cec2241f84f504.jpg 50w,https://media.topachat.com/media/s60/619e4399a2cec2241f84f504.jpg 60w,https://media.topachat.com/media/s100/619e4399a2cec2241f84f504.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e4399a2cec2241f84f504.jpg"
                    alt="Mémoire Ram" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/ram-memoire-pc"
                  class="cms-linkblock__link custom-link bold clamp"><span>Mémoire Ram</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wme_ddr5.html">DDR5</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wme_ddr4.html">DDR4</a>
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
            <div class="cms-linkblock__main"><a href="/p/gamme/refroidissement-pc" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e42d6a2cec2241f84e5a9.webp 50w,https://media.topachat.com/media/s60/619e42d6a2cec2241f84e5a9.webp 60w,https://media.topachat.com/media/s100/619e42d6a2cec2241f84e5a9.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e42d6a2cec2241f84e5a9.jpg 50w,https://media.topachat.com/media/s60/619e42d6a2cec2241f84e5a9.jpg 60w,https://media.topachat.com/media/s100/619e42d6a2cec2241f84e5a9.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e42d6a2cec2241f84e5a9.jpg"
                    alt="Ventilateur / Refroidissement" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/refroidissement-pc"
                  class="cms-linkblock__link custom-link bold clamp"><span>Ventilateur / Refroidissement</span></a>
                <span data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span>
              </div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ven.html">Ventirad</a>
                  </li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_reliq.html">Watercooling</a>
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
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_kitevo.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e4153a2cec2241f84c2d0.webp 50w,https://media.topachat.com/media/s60/619e4153a2cec2241f84c2d0.webp 60w,https://media.topachat.com/media/s100/619e4153a2cec2241f84c2d0.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e4153a2cec2241f84c2d0.jpg 50w,https://media.topachat.com/media/s60/619e4153a2cec2241f84c2d0.jpg 60w,https://media.topachat.com/media/s100/619e4153a2cec2241f84c2d0.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e4153a2cec2241f84c2d0.jpg"
                    alt="Kit d'évolution" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_kitevo.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Kit
                    d'évolution</span></a>
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
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_tu_ven.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e44ff2572885fae30c089.webp 50w,https://media.topachat.com/media/s60/619e44ff2572885fae30c089.webp 60w,https://media.topachat.com/media/s100/619e44ff2572885fae30c089.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e44ff2572885fae30c089.jpg 50w,https://media.topachat.com/media/s60/619e44ff2572885fae30c089.jpg 60w,https://media.topachat.com/media/s100/619e44ff2572885fae30c089.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e44ff2572885fae30c089.jpg"
                    alt="Ventilateur boitier" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_tu_ven.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Ventilateur
                    boitier</span></a>
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
            <div class="cms-linkblock__main"><a href="/p/gamme/cartes-pci-express" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e42da2572885fae309141.webp 50w,https://media.topachat.com/media/s60/619e42da2572885fae309141.webp 60w,https://media.topachat.com/media/s100/619e42da2572885fae309141.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e42da2572885fae309141.jpg 50w,https://media.topachat.com/media/s60/619e42da2572885fae309141.jpg 60w,https://media.topachat.com/media/s100/619e42da2572885fae309141.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e42da2572885fae309141.jpg"
                    alt="Cartes PCI / PCI express" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/cartes-pci-express"
                  class="cms-linkblock__link custom-link bold clamp"><span>Cartes PCI / PCI express</span></a> <span
                  data-v-2005928a="" class="icon cms-linkblock__toggle icon--ar-down"></span></div>
            </div>
            <div class="cms-linkblock__drop" style="display: none;">
              <div>
                <ul>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wt_wcpci.html">Carte
                      Wifi</a></li>
                  <li><a
                      href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wt_car.html">Carte
                      Ethernet</a></li>
                  <li><a href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_son.html">Carte
                      son</a></li>
                  <li><a href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_con.html">Carte
                      contrôleur</a></li>
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
                    srcset="https://media.topachat.com/media/s50/619e4082a2cec2241f84afaa.webp 50w,https://media.topachat.com/media/s60/619e4082a2cec2241f84afaa.webp 60w,https://media.topachat.com/media/s100/619e4082a2cec2241f84afaa.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e4082a2cec2241f84afaa.jpg 50w,https://media.topachat.com/media/s60/619e4082a2cec2241f84afaa.jpg 60w,https://media.topachat.com/media/s100/619e4082a2cec2241f84afaa.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e4082a2cec2241f84afaa.jpg"
                    alt="Connectique" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a href="/p/gamme/connectique-micro"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Connectique</span></a>
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
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_raps.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e4264a2cec2241f84dd40.webp 50w,https://media.topachat.com/media/s60/619e4264a2cec2241f84dd40.webp 60w,https://media.topachat.com/media/s100/619e4264a2cec2241f84dd40.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e4264a2cec2241f84dd40.jpg 50w,https://media.topachat.com/media/s60/619e4264a2cec2241f84dd40.jpg 60w,https://media.topachat.com/media/s100/619e4264a2cec2241f84dd40.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e4264a2cec2241f84dd40.jpg"
                    alt="Raspberry" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_raps.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Raspberry</span></a>
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
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_acq.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e431ca2cec2241f84ebb6.webp 50w,https://media.topachat.com/media/s60/619e431ca2cec2241f84ebb6.webp 60w,https://media.topachat.com/media/s100/619e431ca2cec2241f84ebb6.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e431ca2cec2241f84ebb6.jpg 50w,https://media.topachat.com/media/s60/619e431ca2cec2241f84ebb6.jpg 60w,https://media.topachat.com/media/s100/619e431ca2cec2241f84ebb6.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e431ca2cec2241f84ebb6.jpg"
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
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_grav.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e43262cd9fe16f2396ddd.webp 50w,https://media.topachat.com/media/s60/619e43262cd9fe16f2396ddd.webp 60w,https://media.topachat.com/media/s100/619e43262cd9fe16f2396ddd.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e43262cd9fe16f2396ddd.jpg 50w,https://media.topachat.com/media/s60/619e43262cd9fe16f2396ddd.jpg 60w,https://media.topachat.com/media/s100/619e43262cd9fe16f2396ddd.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e43262cd9fe16f2396ddd.jpg"
                    alt="Graveur" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_grav.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Graveur</span></a>
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
                href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_lec.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/619e45142cd9fe16f23991e8.webp 50w,https://media.topachat.com/media/s60/619e45142cd9fe16f23991e8.webp 60w,https://media.topachat.com/media/s100/619e45142cd9fe16f23991e8.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/619e45142cd9fe16f23991e8.jpg 50w,https://media.topachat.com/media/s60/619e45142cd9fe16f23991e8.jpg 60w,https://media.topachat.com/media/s100/619e45142cd9fe16f23991e8.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/619e45142cd9fe16f23991e8.jpg"
                    alt="Lecteur de cartes" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_lec.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>Lecteur de
                    cartes</span></a>
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
            <p><span class="font-size14">Tu cherches à monter ton PC pour profiter pleinement de tes sessions gaming ?
                Améliorer le vieux PC bureautique qui traîne dans le grenier ? Modder ta machine de guerre afin
                qu'elle puisse afficher toutes les couleurs de l'arc-en-ciel ? Tu trouveras ici un large choix de
                composants, des dernières cartes graphiques aux kits d’évolutions en passant par les câbles et autres
                éléments de personnalisation pour concevoir ou améliorer ta configuration pièce par pièce.</span></p>
          </div>
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </div>

      <div class="cms-layout simple grid">
        <div class="cms-block prose center">
          <div class="cms-block__content">
            <h2><a href="https://www.topachat.com/pages/marque.php">TOP MARQUES</a></h2>
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
                href="https://www.topachat.com/pages/lexique2_marque_est_INTEL_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef48cd4ea4c3e1a216087.webp 50w,https://media.topachat.com/media/s60/634ef48cd4ea4c3e1a216087.webp 60w,https://media.topachat.com/media/s100/634ef48cd4ea4c3e1a216087.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef48cd4ea4c3e1a216087.jpg 50w,https://media.topachat.com/media/s60/634ef48cd4ea4c3e1a216087.jpg 60w,https://media.topachat.com/media/s100/634ef48cd4ea4c3e1a216087.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef48cd4ea4c3e1a216087.jpg"
                    alt="INTEL" width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_INTEL_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>INTEL</span></a>
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
                href="https://www.topachat.com/pages/lexique2_marque_est_AMD_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef44935da751aa214d2ee.webp 50w,https://media.topachat.com/media/s60/634ef44935da751aa214d2ee.webp 60w,https://media.topachat.com/media/s100/634ef44935da751aa214d2ee.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef44935da751aa214d2ee.jpg 50w,https://media.topachat.com/media/s60/634ef44935da751aa214d2ee.jpg 60w,https://media.topachat.com/media/s100/634ef44935da751aa214d2ee.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef44935da751aa214d2ee.jpg" alt="AMD"
                    width="60" height="60" loading="lazy" fetchpriority="auto" style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_AMD_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>AMD</span></a>
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
        <div class="cms-block prose">
          <!---->
          <!---->
          <!---->
          <div class="cms-linkblock">
            <div class="cms-linkblock__main"><a
                href="https://www.topachat.com/pages/lexique2_marque_est_GIGABYTE_puis_cat_est_accueil.html" class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef47c35da751aa214d2f1.webp 50w,https://media.topachat.com/media/s60/634ef47c35da751aa214d2f1.webp 60w,https://media.topachat.com/media/s100/634ef47c35da751aa214d2f1.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef47c35da751aa214d2f1.jpg 50w,https://media.topachat.com/media/s60/634ef47c35da751aa214d2f1.jpg 60w,https://media.topachat.com/media/s100/634ef47c35da751aa214d2f1.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef47c35da751aa214d2f1.jpg"
                    alt="GIBAGYTE" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_GIGABYTE_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>GIBAGYTE</span></a>
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
                href="https://www.topachat.com/pages/lexique2_marque_est_COOLER%20MASTER_puis_cat_est_accueil.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef469a4ddd44cb940e380.webp 50w,https://media.topachat.com/media/s60/634ef469a4ddd44cb940e380.webp 60w,https://media.topachat.com/media/s100/634ef469a4ddd44cb940e380.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef469a4ddd44cb940e380.jpg 50w,https://media.topachat.com/media/s60/634ef469a4ddd44cb940e380.jpg 60w,https://media.topachat.com/media/s100/634ef469a4ddd44cb940e380.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef469a4ddd44cb940e380.jpg"
                    alt="COOLER MASTER" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_COOLER%20MASTER_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>COOLER
                    MASTER</span></a>
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
                href="https://www.topachat.com/pages/lexique2_marque_est_BE%20QUIET%20!_puis_cat_est_accueil.html"
                class="">
                <picture class="no-close cms-linkblock__img">
                  <source type="image/webp"
                    srcset="https://media.topachat.com/media/s50/634ef462ab43904ad959051b.webp 50w,https://media.topachat.com/media/s60/634ef462ab43904ad959051b.webp 60w,https://media.topachat.com/media/s100/634ef462ab43904ad959051b.webp 100w"
                    sizes="60px">
                  <source type="image/jpeg"
                    srcset="https://media.topachat.com/media/s50/634ef462ab43904ad959051b.jpg 50w,https://media.topachat.com/media/s60/634ef462ab43904ad959051b.jpg 60w,https://media.topachat.com/media/s100/634ef462ab43904ad959051b.jpg 100w"
                    sizes="60px"> <img src="https://media.topachat.com/media/s60/634ef462ab43904ad959051b.jpg"
                    alt="BE QUIET" width="60" height="60" loading="lazy" fetchpriority="auto"
                    style="border-radius: 8px;">
                </picture>
              </a>
              <div class="cms-linkblock__label-link"><a
                  href="https://www.topachat.com/pages/lexique2_marque_est_BE%20QUIET%20!_puis_cat_est_accueil.html"
                  class="cms-linkblock__link custom-link bold clamp cms-linkblock__link--simple"><span>BE
                    QUIET</span></a>
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
            <p><span class="font-size14">Recherches associées : <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-12306.html">RTX
                  4090</a> | <a href="/p/content/rtx-4080">RTX 4080</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11575.html">RTX
                  3060
                  Ti</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11447.html">RTX
                  3070</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11445.html">RTX
                  3080</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11446.html">RTX
                  3090</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_f_est_58-11930.html">RX
                  6600
                  XT</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr_puis_f_est_557-6495.html">Intel
                  i5</a> |
                <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr_puis_f_est_557-6496.html">Intel
                  i7</a> |
                <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr_puis_f_est_557-8827.html">Intel
                  i9</a> |
                <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr_puis_f_est_557-8660.html">Ryzen
                  5</a> |
                <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wpr_puis_f_est_557-8617.html">Ryzen
                  7</a> |
                <a
                  href="https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wpr_puis_ref_est_in20011304.html">12700K</a>
                |
                <a
                  href="https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wpr_puis_ref_est_in20011302.html">12900K</a>
                |
                <a href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wme_ddr4.html">Ram
                  DDR4</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_wme_ddr5.html">Ram
                  DDR5</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ali_puis_f_est_22-300.html">Alimentation
                  modulaire</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ali_puis_f_est_281-2152.html">Alimentation
                  Passive</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ali_puis_f_est_19-2148_2148.html">Alimentation
                  750W</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ali_puis_f_est_23-304.html">Alimentation
                  80+
                  Gold</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_boi_sa_puis_f_est_25-310.html">Mini
                  Tour</a>
                | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_boi_sa_puis_f_est_25-309.html">Moyen
                  Tour</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_boi_sa_puis_f_est_25-311.html">Grand
                  Tour</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_boi_sa_puis_f_est_283-2158.html">Boitier
                  PC
                  avec fenêtre</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_boi_sa_puis_f_est_564-8837.html">Boitier
                  RGB</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ven_puis_f_est_564-8837.html">Ventirad
                  RGB</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ven_puis_f_est_245-8540.html">Ventirad
                  AMD
                  AM4</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ven_puis_f_est_245-10975.html">Ventirad
                  Intel 1200</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ven_puis_f_est_289-2174_2174.html">Ventirad
                  120 mm</a> | <a
                  href="https://www.topachat.com/pages/produits_cat_est_micro_puis_rubrique_est_w_ven_puis_f_est_289-2176_2176.html">Ventirad
                  140 mm</a></span></p>
          </div>
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
import footerBloc from 'src/components/Footer.vue'
import $ from 'jquery'

export default defineComponent({
  name: 'ComposantsPage',
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
