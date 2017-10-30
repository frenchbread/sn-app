<template lang="html">
  <div>
    <h1>Telegram</h1>

    <blockquote>
      Укажите ID пользователя телеграм для кадого социального сервиса, чтобы получать уведомления.
      Формат ID должен быть номером (например: 123123).
      <br />
      <br />
      Для того, чтобы узнать ID вашего аккаунта, напишите что-нибудь
      <a target="_blank" href="https://telegram.me/get_userId_by_username_bot">этому боту</a>.
    </blockquote>
    <form class="form" @submit.prevent="submit()">

      <div class="form-group grid">
        <div class="cell -2of12">
          <label>Twitter</label>
        </div>
        <div cell="cell -10of12">
          <input type="text" class="form-control" placeholder="" v-model="settings.twitter"/>
        </div>
      </div>

      <div class="form-group grid">
        <div class="cell -2of12">
          <label>Instagram</label>
        </div>
        <div cell="cell -10of12">
          <input type="text" class="form-control" placeholder="" v-model="settings.instagram"/>
        </div>
      </div>

      <div class="form-group grid">
        <div class="cell -2of12">
          <label>VK</label>
        </div>
        <div cell="cell -10of12">
          <input type="text" class="form-control" placeholder="" v-model="settings.vk"/>
        </div>
      </div>

      <div class="form-group grid">
        <div class="cell -2of12">
          <label>YouTube</label>
        </div>
        <div cell="cell -10of12">
          <input type="text" class="form-control" placeholder="" v-model="settings.youtube"/>
        </div>
      </div>

      <button type="submit" class="btn btn-block btn-success">Save telegram settings</button>
    </form>
  </div>
</template>

<script>
import apiSettings from '@/api/settings'
import notify from '@/components/notify/Notify'

export default {
  data () {
    return {
      settings: {
        twitter: '',
        instagram: '',
        vk: '',
        youtube: ''
      },
      exists: false
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      apiSettings.get()
        .then(settings => {
          if (settings) {
            this.exists = true
            const { twitter, instagram, vk, youtube } = settings
            this.settings = { twitter, instagram, vk, youtube }

            notify.success('settings:fetch:ok')
          } else {
            this.exists = false

            notify.info('settings:fetch:none', 'No settings found. Add some.')
          }
        })
        .catch(err => notify.error('settings:fetch:err', err.message))
    },
    submit () {
      const settings = this.settings

      if (settings.twitter && settings.instagram && settings.vk && settings.youtube) {
        if (this.exists) {
          // Update
          apiSettings.update(settings)
            .then(updatedSettings => notify.success('settings:update:ok'))
            .catch(err => notify.error('settings:update:err', err.message))
        } else {
          // Add new
          apiSettings.add(settings)
            .then(res => {
              this.get()

              notify.success('settings:add:ok', res)
            })
            .catch(err => notify.error('settings:add:err', err.message))
        }
      } else {
        notify.warning('settings:update:warn', 'Please fill all required fields.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
