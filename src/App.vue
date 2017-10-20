<template>
  <div id="app" v-if="!loader_tokenValidation">
    <router-view></router-view>
    <ModalCenter></ModalCenter>
    <NotificationCenter></NotificationCenter>
  </div>
  <div v-else>
    <div class="app-loader">
      Loading...
    </div>
  </div>
</template>

<script>
import store from '@/store'

import ModalCenter from '@/components/modals/ModalCenter'
import NotificationCenter from '@/components/notify/NotificationCenter'
import Login from '@/components/Login'

export default {
  name: 'sn-app',
  computed: {
    userIsAuthenticated () {
      return store.getters.userIsAuthenticated
    },
    loader_tokenValidation () {
      return store.getters.loader_tokenValidation
    }
  },
  components: { ModalCenter, NotificationCenter, Login }
}
</script>

<style lang="scss" scoped>

.app-loader {
  padding: 1em;
}

</style>

<style src="./styles/main.scss" lang="scss"></style>
<style src="./styles/badge.scss" lang="scss"></style>
