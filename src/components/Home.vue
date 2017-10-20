<template lang="html">
  <div class="content">
    <h1>Social Notifier</h1>
    <span v-if="userIsAuthenticated">
      Go to <router-link :to="{ name: 'dashboard' }">dashboard</router-link>.
    </span>
    <span v-else>
      Please <router-link :to="{ name: 'login' }">login</router-link> to continue.
    </span>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'home',
  computed: {
    userIsAuthenticated () {
      return store.getters.userIsAuthenticated
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
