<template lang="html">
  <div class="account">
    <span v-if="account.needsManualCheck" class="indicator indicator-error"></span>
    <span v-else class="indicator indicator-ok"></span>
    <b v-if="account.name">[{{ account.name }}]</b> {{ url }}<b>{{ account.username }}</b>
    <a class="delete-acc" @click="removeAccount()">удалить</a>
  </div>
</template>

<script>
import ModalController from '@/components/modals/ModalController'
import store from '@/store'

export default {
  props: ['account', 'url'],
  methods: {
    removeAccount () {
      ModalController.confirmation('Вы уверены, что хотите удалить этот аккаунт?', () => {
        store.dispatch('removeAccount', this.account._id)
      })
    }
  }
}
</script>

<style lang="scss">

.account {
  border: 3px solid #ccc;
  padding: 1em;
  margin-bottom: 1em;
  background-color: #f7f7f7;

  .delete-acc {
    float: right;
  }

  .indicator {
    display: inline-block;
    height: 8px;
    width: 8px;
    border-radius: 50%;

    &.indicator-ok {
      background-color: #37DB67;
    }

    &.indicator-error {
      background-color: #F64744;
    }
  }
}

</style>
