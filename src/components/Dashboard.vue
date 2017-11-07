<template lang="html">
  <div>
    <NavBar></NavBar>
    <div class="content">
      <Accounts></Accounts>
      <Info></Info>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
import Accounts from './accounts/Accounts'
import Info from './Info'

export default {
  components: { NavBar, Accounts, Info }
}
</script>

<style lang="scss" scoped>

body {
  background-color: #383249;
}

.content {
  width: 60em;
  margin: 0 auto;
}

</style>
