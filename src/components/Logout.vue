<template lang="html">
  <div class="content">
     > Authorized: {{ userIsAuthenticated }}
   </div>
</template>

<script>
import libAuth from '@/lib/auth'
import store from '@/store'

export default {
  name: 'logout',
  created () {
    libAuth.logout(this)
  },
  computed: {
    userIsAuthenticated () {
      return store.getters.userIsAuthenticated
    }
  }
}
</script>

<style lang="scss" scoped></style>
