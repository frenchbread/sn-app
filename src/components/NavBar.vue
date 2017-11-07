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
      ModalController.show('Добавить аккаунт', AddAccount)
    },
    openSettingsModal () {
      ModalController.show('Настройки', Settings)
    }
  }
}
</script>

<style lang="scss" scoped>

header {
  padding: 1em;
  border: 3px solid darken(#DC5F58, 20%);
  background-color: #DC5F58;
  color: #fff;

  .logo {
    display: inline-block;
    font-size: 1.3em;
    font-weight: bold;
  }

  .menu-btn {
    color: #fff;
    border: none;
    font-size: 1.3em;

    &:hover {
      background-color: transparent;
      border-bottom: 1px solid #fff;
    }
  }
}

</style>
