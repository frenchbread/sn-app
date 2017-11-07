<template lang="html">
  <div class="info">
    v{{ app_version }}
  </div>
</template>

<script>
import pckg from '../../package.json'

export default {
  data () {
    return {
      app_version: pckg.version
    }
  }
}
</script>

<style lang="scss" scoped>

.info {
  color: #fff;
}

</style>
