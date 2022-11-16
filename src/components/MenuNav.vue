<template>

  <q-item v-if="dark" clickable @click="changeTheme()">

    <q-item-section>
      <q-item-label class="menu_item">{{ (title && dark == true) ? ($q.dark.isActive) ? 'Mode clair' : 'Mode sombre' :
          title
      }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" :color="($q.dark.isActive) ? 'white' : 'black'" />
    </q-item-section>

  </q-item>

  <q-item v-if="!dark && !noLink" clickable tag="a" :href="link">

    <q-item-section>
      <q-item-label class="menu_item">{{ title }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="grey" />
    </q-item-section>

  </q-item>

  <q-item v-if="!dark && noLink" clickable :to="link">

    <q-item-section>
      <q-item-label class="menu_item">{{ title }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="grey" />
    </q-item-section>

  </q-item>

</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import { Cookies } from 'quasar'

export default defineComponent({
  name: 'menuNav',
  setup() {

    const $q = useQuasar()

    return {
      changeTheme() {
        if ($q.dark.isActive == false) {
          $q.dark.set(false)
          $q.dark.toggle()

          Cookies.set('theme_dark', 'true', {
            expires: '/',
            secure: true
          })

        } else {
          $q.dark.set(true)
          $q.dark.toggle()

          Cookies.set('theme_dark', 'false', {
            expires: '/',
            secure: true
          })
        }
      },
    }

  },
  props: {

    title: {
      type: String,
      required: true
    },

    dark: {
      type: Boolean,
      required: true
    },

    noLink: {
      type: Boolean,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }

  },
  mounted() {
    const $q = useQuasar()

    if (Cookies.get('theme_dark') == "true") {
      $q.dark.set(false)
      $q.dark.toggle()
    } else {
      $q.dark.set(true)
      $q.dark.toggle()
    }
  }
})
</script>
