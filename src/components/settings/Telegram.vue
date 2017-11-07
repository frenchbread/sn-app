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
      <div class="divider"></div>
      Для того, чтобы начать получать уведомления, напишите этим ботам, с Telegram аккаунтов которые указаны ниже:
      <ul>
        <li><a target="_blank" href="https://telegram.me/socialnotifier_twitter_bot">SocialNotifier Twitter</a></li>
        <li><a target="_blank" href="https://telegram.me/socialnotifier_instagram_bot">SocialNotifier Instagram</a></li>
        <li><a target="_blank" href="https://telegram.me/socialnotifier_vk_bot">SocialNotifier VK</a></li>
        <li><a target="_blank" href="https://telegram.me/socialnotifier_youtube_bot">SocialNotifier YouTube</a></li>
      </ul>
    </blockquote>
    <form class="form" @submit.prevent="submit()">

      <div class="form-group grid">
        <div class="cell -2of12">
          <label>Admin</label>
        </div>
        <div cell="cell -10of12">
          <input type="text" class="form-control" placeholder="" v-model="settings.admin"/>
          <div class="help-block">Админ подписывается на рассылку со всех соц. сервисов.</div>
        </div>
      </div>

      <div class="form-group grid">
        <div class="cell -2of12">
          <label>Twitter</label>
        </div>
        <div cell="cell -10of12">
          <input type="text" class="form-control" placeholder="" v-model="settings.twitter"/>
          <div class="help-block">Только для Twitter</div>
        </div>
      </div>

      <div class="form-group grid">
        <div class="cell -2of12">
          <label>Instagram</label>
        </div>
        <div cell="cell -10of12">
          <input type="text" class="form-control" placeholder="" v-model="settings.instagram"/>
          <div class="help-block">Только для Instagram</div>
        </div>
      </div>

      <div class="form-group grid">
        <div class="cell -2of12">
          <label>VK</label>
        </div>
        <div cell="cell -10of12">
          <input type="text" class="form-control" placeholder="" v-model="settings.vk"/>
          <div class="help-block">Только для VK</div>
        </div>
      </div>

      <div class="form-group grid">
        <div class="cell -2of12">
          <label>YouTube</label>
        </div>
        <div cell="cell -10of12">
          <input type="text" class="form-control" placeholder="" v-model="settings.youtube"/>
          <div class="help-block">Только для YouTube</div>
        </div>
      </div>

      <button type="submit" class="btn btn-block btn-success">Сохранить настройки для Telegram</button>
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
        admin: '',
        twitter: '',
        instagram: '',
        vk: '',
        youtube: ''
      },
      exists: false
    }
  },
  created () {
    this.getSettings()
  },
  methods: {
    getSettings () {
      apiSettings.get()
        .then(settings => {
          if (settings) {
            this.exists = true
            const { admin, twitter, instagram, vk, youtube } = settings
            this.settings = { admin, twitter, instagram, vk, youtube }

            // notify.success('settings:fetch:ok')
          } else {
            this.exists = false

            // notify.info('settings:fetch:none', 'No settings found. Add some.')
          }
        })
        .catch(err => notify.error('settings:fetch:err', err.message))
    },
    submit () {
      const settings = this.settings

      if (this.exists) {
        // Update
        apiSettings.update(settings)
          .then(updatedSettings => {
            notify.success('Настройки обновлены!')
            // notify.success('settings:update:ok')
          })
          .catch(err => notify.error('settings:update:err', err.message))
      } else {
        // Add new
        apiSettings.add(settings)
          .then(res => {
            this.getSettings()

            notify.success('Настройки обновлены!')
            // notify.success('settings:add:ok', res)
          })
          .catch(err => notify.error('settings:add:err', err.message))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
