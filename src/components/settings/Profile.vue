<template lang="html">
  <div>
    <h1>Profile</h1>

    <div>
      Logged in as <b>{{ user.email }}</b>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  computed: {
    user () {
      return store.getters.user
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
