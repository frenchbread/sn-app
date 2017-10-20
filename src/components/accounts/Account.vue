<template lang="html">
  <div class="account">
    <b v-if="account.name">[{{ account.name }}]</b> {{ url }}<b>{{ account.username }}</b>
    <a class="delete-acc" @click="removeAccount()">удалить</a>
  </div>
</template>

<script>
import store from '@/store'

export default {
  props: ['account', 'url'],
  methods: {
    removeAccount () {
      store.dispatch('removeAccount', this.account._id)
    }
  }
}
</script>

<style lang="scss">

.account {
  border: 1px solid #ccc;
  padding: 1em;
  margin-bottom: 1em;
  background-color: white;

  .delete-acc {
    float: right;
  }
}

</style>
