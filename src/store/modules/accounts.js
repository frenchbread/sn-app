import _ from 'lodash'

import apiAccounts from '../../api/accounts'
import notify from '../../components/notify/Notify'

const state = {
  accounts: []
}

const mutations = {
  ADD_ACCOUNTS (state, accounts) {
    state.accounts = accounts
  },
  ADD_ACCOUNT (state, account) {
    state.accounts.push(account)
  },
  REMOVE_ACCOUNT (state, id) {
    const tokenToRemove = state.accounts.map(x => x._id).indexOf(id)
    state.accounts.splice(tokenToRemove, 1)
  }
}

const actions = {
  getAccounts ({ commit }) {
    apiAccounts.getAll()
      .then(accounts => {
        notify.success('acccounts:fetch:ok')

        commit('ADD_ACCOUNTS', accounts)
      })
      .catch(err => notify.error('accounts:fetch:err', err.message))
  },
  addAccount ({ commit }, account) {
    apiAccounts.add(account)
      .then(res => {
        notify.success('acccount:add:ok')

        commit('ADD_ACCOUNT', res)
      })
      .catch(err => notify.error('account:add:err', err.message))
  },
  removeAccount ({ commit }, id) {
    apiAccounts.remove(id)
      .then(res => {
        notify.success('acccount:remove:ok')

        commit('REMOVE_ACCOUNT', id)
      })
      .catch(err => notify.error('account:remove:err', err.message))
  }
}

const getters = {
  accounts: state => _.groupBy(state.accounts, acc => acc.type)
}

export default {
  state,
  mutations,
  actions,
  getters
}
