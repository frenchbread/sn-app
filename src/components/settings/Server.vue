<template lang="html">
  <div>
    <h1>Server</h1>

    <div>
      <b>Status</b>
      <span v-if="!status || status === ''" class="badge badge-info">hold on..</span>
      <span v-else-if="status === 'ok'" class="badge badge-success">ok</span>
      <span v-else class="badge badge-error">error</span>
    </div>
  </div>
</template>

<script>
import api from '@/api/server'
import notify from '@/components/notify/Notify'

export default {
  data () {
    return {
      status: ''
    }
  },
  created () {
    api.checkStatus()
      .then(res => {
        this.status = res.status
        // notify.success('server:status:ok')
      })
      .catch(err => notify.error('server:status:err', err.message))
  }
}
</script>

<style lang="scss" scoped>
</style>
