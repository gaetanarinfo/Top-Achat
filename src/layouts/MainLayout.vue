<template>

  <q-layout view="lHh Lpr lFf">

    <q-header elevated>

      <q-toolbar class="bg-white">

        <q-btn flat dense round icon="menu" color="grey" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-item style="width: 170px" to="/" aria-label="Topachat - L'épicier du geek depuis 1999"
          class="header-main__logo router-link-exact-active router-link-active" data-v-15348038="" aria-current="page">
          <div width="120" height="40" class="header-logo header-main__logo-img" data-v-55ce9e0f="" data-v-15348038="">
            <svg fill="none" version="1.1" viewBox="0 0 191.73 40.154" class="header-logo__image" data-v-55ce9e0f="">
              <g fill="inherit" transform="matrix(.31985 0 0 .31985 134.94 -48.51)" clip-rule="evenodd"
                fill-rule="evenodd" data-v-55ce9e0f="">
                <path
                  d="m-409.31 156.44 28.042-0.0904v22.41h15.662v17.832h-15.301c0 7.2137-0.0116 14.428-6e-3 21.642 3e-3 3.832-0.8443 9.9875 2.8742 12.485 1.054 0.7078 11.83 1.4588 11.83 0.6919v21.446s-12.771 0.483-19.036 0.482c-8.3132 0-15.181-0.723-19.157-5.6627-3.9759-4.9395-4.6988-10.481-4.6988-14.578v-36.386h-12.771v-17.952h12.53z"
                  data-v-55ce9e0f=""></path>
                <path
                  d="m133.85 156.44 28.043-0.0904v22.41h15.662v17.832h-15.301c0 7.2137-0.011 14.428-6e-3 21.642 3e-3 3.832-0.844 9.9875 2.875 12.485 1.054 0.7078 11.83 1.4588 11.83 0.6919v21.446s-12.771 0.483-19.036 0.482c-8.314 0-15.181-0.723-19.157-5.6627-3.976-4.9395-4.699-10.481-4.699-14.578v-36.386h-12.771v-17.952h12.53z"
                  data-v-55ce9e0f=""></path>
                <path
                  d="m-327.02 234.79c-9.5183 0-12.168-8.0914-12.168-18.072 0-9.981 3.253-18.072 12.168-18.072 8.9157 0 12.169 8.0913 12.169 18.072 0 9.9809-2.65 18.072-12.169 18.072zm0.06-57.349c-26.205 0-40.421 17.45-40.421 38.975 0 21.526 13.614 38.977 40.421 38.977 26.807 0 40.422-17.451 40.422-38.977 0-21.526-14.217-38.975-40.422-38.975z"
                  data-v-55ce9e0f=""></path>
                <path
                  d="m-242.29 234.67c-9.519 0-12.169-8.0914-12.169-18.072 0-9.981 3.253-18.072 12.169-18.072s12.169 8.0913 12.169 18.072c0 9.9809-2.651 18.072-12.169 18.072zm36.023-40c-3.372-6.9882-12.167-17.229-27.107-17.229s-20.964 9.8798-20.964 9.8798v-7.7111h-27.349v97.59h28.192l0.12-31.807c8.073 8.6752 14.82 9.7592 21.688 9.7592 6.867 0 15.301-1.325 22.048-9.9999 6.747-8.6747 8.072-21.566 8.072-29.277s-1.325-14.217-4.699-21.205"
                  data-v-55ce9e0f=""></path>
                <path
                  d="m-152.37 231.23c-1.447 3.0123-4.579 6.9882-10.603 6.9882s-8.554-4.0966-8.795-6.0246c-0.241-1.9272 0.241-5.301 3.856-6.7467 3.614-1.4458 9.397-1.4458 16.506-5.301 0 0 0.482 8.0718-0.964 11.084zm28.313 12.168c-0.482-3.4937-0.362-40.963-0.482-44.337s-0.482-9.1569-5.061-13.735c-4.578-4.5781-12.65-6.9882-20.361-7.5904-7.71-0.6022-19.638-0.3615-28.795 1.6865-10.959 2.4521-19.109 11.035-18.675 22.53h26.386c0.482-3.9759 2.289-7.8311 10-7.7111 7.711 0.1207 8.795 4.2173 9.156 5.1809 0.362 0.9644 1.808 5.9039-5.783 7.7111-7.592 1.8073-12.65 1.0844-21.927 3.373-9.277 2.2894-15.663 5.6632-19.157 11.326s-2.651 16.747 1.085 23.373c6.333 11.237 26.251 12.295 36.867 7.9519 5.301-2.169 10-6.7469 10-6.7469 0 2.5301 0.482 6.8679 0.482 6.8679h29.277c-1.807-3.4941-2.53-6.3857-3.012-9.8802"
                  data-v-55ce9e0f=""></path>
                <path
                  d="m92.406 231.23c-1.446 3.0123-4.578 6.9882-10.602 6.9882s-8.554-4.0966-8.796-6.0246c-0.241-1.9272 0.242-5.301 3.856-6.7467 3.614-1.4458 9.397-1.4458 16.506-5.301 0 0 0.483 8.0718-0.964 11.084zm28.313 12.168c-0.482-3.4937-0.361-40.963-0.481-44.337s-0.482-9.1569-5.061-13.735c-4.579-4.5781-12.651-6.9882-20.361-7.5904-7.711-0.6022-19.639-0.3615-28.796 1.6865-10.958 2.4521-19.109 11.035-18.674 22.53h26.385c0.482-3.9759 2.289-7.8311 10-7.7111 7.711 0.1207 8.795 4.2173 9.157 5.1809 0.361 0.9644 1.807 5.9039-5.784 7.7111-7.591 1.8073-12.65 1.0844-21.927 3.373-9.277 2.2894-15.663 5.6632-19.157 11.326s-2.65 16.747 1.084 23.373c6.334 11.237 26.251 12.295 36.868 7.9519 5.301-2.169 10-6.7469 10-6.7469 0 2.5301 0.482 6.8679 0.482 6.8679h29.277c-1.807-3.4941-2.53-6.3857-3.012-9.8802"
                  data-v-55ce9e0f=""></path>
                <path
                  d="m-68.139 223.72c-1.186 6.5068-4.46 11.076-11.612 11.076-9.518 0-12.168-8.0914-12.168-18.072 0-9.9803 3.253-18.072 12.168-18.072 5.968 0 9.518 3.2523 10.964 9.2761l26.895 0.0572c-2.687-18.732-14.87-30.539-37.799-30.539-26.205 0-40.421 17.45-40.421 38.975 0 21.526 13.615 38.977 40.421 38.977 23.878 0 35.664-12.236 37.954-31.558z"
                  data-v-55ce9e0f=""></path>
                <path
                  d="m-8.3894 253.05h-28.374v-101.39h28.193v35.783s3.976-4.8795 8.675-7.2289c4.699-2.3494 12.47-3.0723 18.253-2.3494s14.096 3.253 18.072 10.12c3.976 6.8674 3.615 10.663 3.615 13.193v52.409h-27.832s0.076-40.163-0.542-44.638c-0.723-5.241-2.891-9.0361-9.397-9.0361-6.506 0-9.579 4.518-10.482 9.2168-0.904 4.6988-0.181 43.915-0.181 43.915z"
                  data-v-55ce9e0f=""></path>
              </g>
            </svg>
          </div>
        </q-item>

        <q-space></q-space>

        <q-btn flat round dense class="q-mr-xs q-mr-sm">
          <div class="avatar_user_div">
            <img src="https://www.topachat.com/img/default/avatar.png" class="avatar_user" />
          </div>

          <q-menu fit anchor="bottom left" class="menu" self="top start">

            <q-item clickable href="https://www.topachat.com/authentification">
              <q-item-section style="width: 10px;max-width: 15px;flex: 3000 1 0%;">
                <q-icon name="fa-solid fa-power-off">
                </q-icon>
              </q-item-section>
              <q-item-section class="text-bold">Me connecter</q-item-section>
            </q-item>

            <q-item clickable href="https://www.topachat.com/authentification">
              <q-item-section style="width: 10px;max-width: 15px;flex: 3000 1 0%;">
                <q-icon name="fa-solid fa-user">
                </q-icon>
              </q-item-section>
              <q-item-section class="text-bold">
                Mon compte client
              </q-item-section>
            </q-item>

            <q-item clickable href="https://www.topachat.com/authentification#modal-bugreport">
              <q-item-section style="width: 10px;max-width: 15px;flex: 3000 1 0%;">
                <q-icon name="fa-solid fa-flag">
                </q-icon>
              </q-item-section>
              <q-item-section class="text-bold">
                Signaler un bug
              </q-item-section>
            </q-item>

          </q-menu>
        </q-btn>

        <q-btn flat round dense icon="search" class="q-mr-xs" color="grey" @click="open('bottom')" />

      </q-toolbar>

    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>

      <div class="q-pa-md">
        <a href="https://www.topachat.com/pages/configomatic.php"
          class="mobile-menu__item configo-link custom-link mobile-menu__configo"><img alt="Configomatic"
            src="https://www.topachat.com/img/configo_logo.svg" width="48" height="62" class="configo-link__image"> <img
            alt="Configomatic" src="https://www.topachat.com/img/configo-text.svg" width="200" height="50"
            class="configo-link__image configo-link__image--text">
          <span class="configo-link__label"> Crée ton PC sur mesure </span></a>
      </div>

      <q-list>
        <menuNav v-for="link in menusNav" :key="link.title" v-bind="link" />
      </q-list>

      <q-item tag="a" class="flex flex-center" target="_blank"
        href="https://www.paypal.com/donate/?hosted_button_id=QAG9CSP3BQ9NU">
        <q-img style="max-width: 80px;width: 80px;height: auto;"
          src="http://api-top-achat.fun:5000/img/logo-paypal-1.png" />
      </q-item>

      <q-item class="q-pa-none q-mt-md q-ma-none text-center q-mb-sm"
        style="display: block;min-height: auto;font-weight: 700">
        Version {{ replaceGuillemet(params.appVersion) }} - <span style="text-transform:capitalize;">{{
            platform.platform
        }}</span>
      </q-item>

    </q-drawer>

    <q-page-sticky position="bottom-right" style="z-index: 2;" :offset="[18, 18]">

      <q-fab color="blue-4" icon="bug_report" @click="bug = true" glossy label-position="left" padding="sm">

        <template v-slot:label>
          Un bug ?
        </template>

      </q-fab>

    </q-page-sticky>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

  <!-- Search -->
  <q-dialog v-model="dialog" :position="position">
    <q-card style="width: 350px">

      <q-card-section class="row items-center no-wrap">
        <div>
          <div class="text-weight-bold text-h6">Rechercher un produit</div>
        </div>
      </q-card-section>

      <q-card-section class="">

        <q-input filled bottom-slots v-model="searchInput" :dense="dense" @keypress.enter="searchValue(searchInput)">

          <template v-slot:append>
            <q-icon v-if="searchInput !== ''" name="close" @click="searchInput = ''" class="cursor-pointer" />
            <q-icon name="search" @click="searchValue(searchInput)" />
          </template>

        </q-input>

        <q-list v-if="searchLists" bordered style="max-height: 400px;overflow: scroll;">

          <q-item v-for="search in searchLists" v-bind:key="search.id" clickable v-ripple tag="a"
            :href="'https://topachat.com' + search.url">

            <q-item-section style="width: 58px; flex:none;border-radius: 10px;">
              <q-img style="width: 58px;border-radius: 10px;"
                :src="'https://media.topachat.com/media/s400/' + search['media']['main'].hash_id + '.jpg '" />
            </q-item-section>

            <q-item style="flex-direction: column;text-align: left;"><span class="text-bold">{{ search.label }}</span>
              <span class="text-grey">{{ search.sublabel }}</span>
            </q-item>

          </q-item>

        </q-list>

      </q-card-section>

    </q-card>

  </q-dialog>

  <!-- Bug -->
  <q-dialog v-model="bug" persistent>

    <q-card full-width>

      <q-toolbar>

        <q-avatar>
          <img src="../../public/icons/favicon-128x128.png">
        </q-avatar>

        <q-toolbar-title style="font-size: 13px;font-weight: bold;">Un bug à signaler ? un avis sur le site ?
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />

      </q-toolbar>

      <q-card-section style="font-size: 13px;">
        Tous les commentaires, les signalements de bug, les avis que nous
        pourrons recueillir nous aideront à vous proposer un site encore
        meilleur. Merci d’avance pour votre participation ;-)
      </q-card-section>

      <div class="q-pa-md row items-start">

        <q-card class="text-red text-bold" style="background: radial-gradient(circle, #ccc 0%, #E7E5E4 100%)">

          <q-card-section style="font-size: 13px;">
            Attention , les questions
            concernant les commandes en cours, les délais, le SAV,
            etc... ne seront pas traitées via ce formulaire.<br><br>

            Pour ces demandes :<br>

            <a data-v-1842e6c6="" href="https://www.topachat.com/p/assistance" class="">Nous Contacter</a>

          </q-card-section>

        </q-card>

      </div>

      <div class="q-pa-md">

        <div class=" flex flex-center">
          <div id="loaderForm">
            <q-circular-progress indeterminate size="50px" :thickness="0.22" rounded color="blue-4" track-color="grey-3"
              class="q-ma-md" />
          </div>
        </div>

        <q-form id="formBug" @submit="onSubmit" @reset="onReset" class="q-gutter-md">

          <q-input filled class="q-mb-none" type="email" :dense="dense" v-model="email" label="Ton adresse email" />

          <q-input type="textarea" class="q-mb-none" filled :dense="dense" v-model="content" label="Ton commentaire" />

          <q-toggle size="xs" class="q-mt-sm" checked-icon="check" unchecked-icon="clear" v-model="accept"
            label="J'accepte la licence et les termes" style="font-size: 12px;font-weight: 600;">
          </q-toggle>

          <q-card-section class="q-pa-sm" style="font-size: 13px;">
            Ton adresse e-mail ne sera pas utilisée dans un cadre
            publicitaire ou commercial. Elle sera uniquement utilisée pour
            vous répondre si nécessaire.
          </q-card-section>

          <div>
            <q-btn label="Envoyer" rounded push type="submit" glossy color="white" flat class="bg-blue-5" />
            <q-btn label="Effacer" rounded push type="reset" glossy color="black" flat class="q-ml-sm bg-warning" />
          </div>

        </q-form>

      </div>

    </q-card>

  </q-dialog>

</template>

<script>
import { defineComponent, ref } from 'vue'
import menuNav from 'src/components/MenuNav.vue'
import axios from 'axios'
import { useQuasar } from 'quasar'
import $ from 'jquery'

const linksList = [
  {
    title: 'Mode sombre',
    link: '',
    icon: 'dark_mode',
    dark: true,
    noLink: false
  },
  {
    title: 'Ordinateurs',
    link: 'ordinateurs',
    icon: 'chevron_right',
    dark: false,
    noLink: true
  },
  {
    title: 'Composants',
    link: 'composants',
    icon: 'chevron_right',
    dark: false,
    noLink: true
  },
  {
    title: 'Périphériques',
    link: 'peripheriques',
    icon: 'chevron_right',
    dark: false,
    noLink: true
  },
  {
    title: 'Gaming',
    link: 'gaming',
    icon: 'chevron_right',
    dark: false,
    noLink: true
  },
  {
    title: ' Besoin d\'aide ',
    link: 'assistance',
    icon: 'contact_support',
    dark: false,
    noLink: true
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    menuNav
  },
  data() {
    return {
      searchInput: ref(''),
      searchLists: [],
      searchValue(value) {
        axios
          .get('search/' + value)
          .then(res => {
            if (res.status == 200) {
              this.searchLists = res.data.searchList
            }

          })
      },
    }
  },
  setup() {
    const leftDrawerOpen = ref(false)
    const dialog = ref(false)
    const position = ref('top')
    const $q = useQuasar()

    const content = ref(null)
    const email = ref(null)
    const accept = ref(false)
    const bug = ref(false)
    var loader = false
    var emailOk = false

    return {
      bug,
      loader,
      replaceGuillemet(value) {
        return value.replaceAll('"', '');
      },
      params: {
        appVersion: '1.0.11',
      },
      platform: $q.platform.is,
      dialog,
      position,
      open(pos) {
        position.value = pos
        dialog.value = true
      },
      content,
      email,
      accept,
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Tu dois d\'abord accepter la licence et les conditions'
          })
        } else if (email.value == null) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Merci d\'entrer ton adresse email'
          })
        } else if (content.value == null) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Merci d\'entrer ton message'
          })
        }
        else {

          $('#formBug').fadeOut()
          $('#loaderForm').fadeIn()

          setTimeout(() => {

            var data = {
              email: email.value,
              content: content.value
            }

            if (emailOk !== true) {

              axios
                .post('/repport-bug', data)
                .then(function (res) {

                  if (res.error) {

                    $q.notify({
                      color: 'red-5',
                      textColor: 'white',
                      icon: 'warning',
                      message: 'Une erreur est survenu'
                    })

                    emailOk = true

                  } else {

                    $q.notify({
                      color: 'green-4',
                      textColor: 'white',
                      icon: 'cloud_done',
                      message: 'Ta demande a bien été transmise'
                    })

                    $('#loaderForm').fadeOut()

                    emailOk = false

                    bug.value = false

                  }

                })

            }

          }, 2500);


        }
      },
      onReset() {
        email.value = null
        content.value = null
        accept.value = false
      },
      dense: ref(true),
      menusNav: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
