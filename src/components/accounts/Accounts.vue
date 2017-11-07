<template lang="html">
  <div class="accounts">
    <div v-if="accounts">

      <div class="social-service" v-for="accountType in accountTypes">

        <h2>{{ accountType.display }}</h2>

        <div v-if="accounts[accountType.name] && accounts[accountType.name].length > 0">
          <Account
            v-for="account in accounts[accountType.name]"
            :key="account._id"
            :account="account"
            :url="accountType.url">
          </Account>
        </div>
        <div v-else>
          <p>> Аккаунты не добавлены</p>
        </div>

      </div>

    </div>
    <div v-else>
      <p>> Аккаунты не добавлены</p>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import accountTypes from '@/lib/account_types'

import Account from './Account'

export default {
  data () {
    return { accountTypes }
  },
  created () {
    store.dispatch('getAccounts')
  },
  components: { Account },
  computed: {
    accounts () {
      return store.getters.accounts
    }
  }
}
</script>

<style lang="scss">

.accounts {
  width: 60em;
  margin: 0 auto;

  .social-service {
    border: 1px solid #ccc;
    background-color: #f7f7f7;
    padding: 0 1em;
    margin-bottom: 1em;
    border-radius: 3px;
  }

}

</style>
