<template lang="html">
  <div>
    <NavBar></NavBar>
    <div class="content">
      <Accounts></Accounts>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
import Accounts from './accounts/Accounts'

export default {
  components: { NavBar, Accounts }
}
</script>

<style lang="scss" scoped>
</style>
