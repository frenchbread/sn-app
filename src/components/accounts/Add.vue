<template lang="html">
  <div>
    <form class="form" @submit.prevent="submit()">

      <div class="form-group">
        <select class="form-control" v-model="account.type">
          <option value="">Выберите социальный сервис</option>
          <option v-for="accountType in accountTypes" :value="accountType.name">{{ accountType.display }}</option>
        </select>
      </div>

      <div v-if="account.type !== ''">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            v-model="account.name"/>
        </div>


        <div v-if="account.type === 'youtube'" class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Channel ID"
            v-model="account.username"/>
        </div>

        <div v-else-if="account.type === 'vk'" class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Domain (Username or ID)"
            v-model="account.username"/>
        </div>

        <div v-else class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            v-model="account.username"/>
        </div>
      </div>

      <blockquote v-if="account.username">
        <b>Preview: </b>
        <a :href="getPreviewUrl(account.type, account.username)" target="_blank">
          {{ getPreviewUrl(account.type, account.username) }}
        </a>
      </blockquote>

      <div>
        <button type="submit" class="btn btn-block btn-success">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script>
import _ from 'lodash'

import store from '@/store'
import accountTypes from '@/lib/account_types'

import notify from '../notify/Notify'

export default {
  props: ['close'],
  data () {
    return {
      account: {
        type: '',
        name: '',
        username: ''
      },
      accountTypes
    }
  },
  methods: {
    submit () {
      if (this.account.type && this.account.username) {
        store.dispatch('addAccount', this.account)

        this.close()
      } else {
        notify.warning('Check form fields!')
      }
    },
    getPreviewUrl (accountType, username) {
      const type = _.find(accountTypes, accType => accType.name === accountType)

      return type.url + username
    }
  }
}
</script>

<style lang="scss" scopde>
</style>
