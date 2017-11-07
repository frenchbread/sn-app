<template lang="html">
  <div>

    <Profile></Profile>

    <div class="divider"></div>

    <Server></Server>

    <div class="divider"></div>

    <Telegram></Telegram>

    <div class="gap"></div>

    <button class="btn btn-block btn-warning" @click="logout()">Выйти из аккаунта</button>

  </div>
</template>

<script>
import Profile from './Profile'
import Server from './Server'
import Telegram from './Telegram'

export default {
  props: ['closeAll'],
  methods: {
    logout () {
      this.closeAll()
      this.$router.push({ name: 'logout' })
    }
  },
  components: { Profile, Server, Telegram }
}
</script>

<style lang="scss" scoped>
</style>
