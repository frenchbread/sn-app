<template lang="html">
  <div class="content">
    <h1>Social Notifier</h1>
    <span v-if="userIsAuthenticated">
      Go to <router-link :to="{ name: 'dashboard' }">dashboard</router-link>.
    </span>
    <span v-else>
      Please <router-link :to="{ name: 'login' }">login</router-link> to continue.
    </span>

    <div class="gap-big"></div>

    <Info></Info>
  </div>
</template>

<script>
import store from '@/store'
import Info from './Info'

export default {
  name: 'home',
  computed: {
    userIsAuthenticated () {
      return store.getters.userIsAuthenticated
    }
  },
  components: { Info }
}
</script>

<style lang="scss" scoped>

.content {
  color: #fff;
}

</style>
