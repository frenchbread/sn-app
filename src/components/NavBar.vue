<template lang="html">
  <header>
    <div class="grid">
      <div class="cell -3of12">
        <!-- <b class="menu-btn">SocialNotifier</b> -->
        <span class="logo">SocialNotifier</span>
      </div>
      <div class="cell -9of12 align-right">
        <a class="menu-btn" @click="openAddAccountModal()">+ Добавить аккаунт</a>
        <a class="menu-btn" @click="openSettingsModal()">Настройки</a>
      </div>
    </div>
  </header>
</template>

<script>
import ModalController from './modals/ModalController'
import AddAccount from './accounts/Add'
import Settings from './settings/Settings'

export default {
  methods: {
    openAddAccountModal () {
      ModalController.show('Add Account', AddAccount)
    },
    openSettingsModal () {
      ModalController.show('Settings', Settings)
    }
  }
}
</script>

<style lang="scss">

header {
  padding: 1em;
  border-bottom: 1px solid #ccc;

  .logo {
    display: inline-block;
    font-size: 1.3em;
    font-weight: bold;
  }

  .menu-btn {
    font-size: 1.3em;
  }
}

</style>
