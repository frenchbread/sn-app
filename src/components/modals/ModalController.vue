<template lang="html">
</template>

<script>
import _ from 'lodash'

export default {
  state: [],

  show (title, component, data, max) {
    if (this._getModalsCount(title) < (max || 1)) {
      this._addModal(title, component, data)
    }
  },

  confirmation (title, confirm) {
    if (this._getModalsCount(title) < 1) {
      this._addConfirmation(title, confirm)
    }
  },

  close (id) {
    this._addRemoveClass(id)
    setTimeout(() => {
      const tokenToRemove = _.map(this.state, x => x.id).indexOf(id)
      this.state.splice(tokenToRemove, 1)
    }, 360)
  },

  closeAll () {
    _.forEach(this.state, x => {
      this.close(x.id)
    })
  },

  _getModalsCount (title) {
    return _.filter(this.state, x => x.title === title).length
  },

  _addRemoveClass (id) {
    const m = _.find(this.state, x => x.id === id)
    m.class += ' remove'
  },

  _addModal (title, component, data) {
    this.state.push({
      id: new Date().getTime(),
      title,
      component,
      data,
      class: 'modal'
    })
  },

  _addConfirmation (title, confirm) {
    this.state.push({
      id: new Date().getTime(),
      title,
      confirm,
      isConfirmation: true,
      class: 'modal'
    })
  }
}
</script>

<style lang="scss" scoped></style>
