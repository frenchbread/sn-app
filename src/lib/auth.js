import apiAuth from '@/api/auth'
import store from '@/store'
import notify from '@/components/notify/Notify'

export default {
  login (context, creds) {
    apiAuth.login(creds)
      .then(res => {
        if (res.ok) {
          // Clear err message
          context.error = ''

          // Set auth token
          this.setToken(res.token)

          // Add user to vuex store
          store.dispatch('saveUser', res.user)

          // Notify user & return to home page
          notify.success('auth:login:ok', `Welcome back, ${res.user.email}!`)

          // Redirect
          context.$router.push('/')
        } else {
          context.error = res.message
        }
      })
      .catch(err => {
        context.error = err.message
      })
  },
  logout (context) {
    // Clear token
    this.clearToken()

    // Cleanup storage
    store.dispatch('clearUser')

    // Notify
    notify.success('auth:logout:ok', 'Logout successfull.')

    // Redirect
    context.$router.push({ name: 'home' })
  },
  validateToken () {
    store.dispatch('start_loader_tokenValidation')
    if (this.getToken()) {
      return apiAuth.validateToken()
        .then(res => {
          store.dispatch('stop_loader_tokenValidation')
          if (res.ok) {
            // Save user
            store.dispatch('saveUser', res.user)

            notify.success('auth:validate:ok', 'Token validated successfully.')
            return true
          }
          return false
        })
        .catch(err => notify.error('auth:validate:err', err.message, true))
    } else {
      store.dispatch('stop_loader_tokenValidation')
      return Promise.resolve(false)
    }
  },
  getAuthHeader () {
    return {
      'Authorization': 'JWT ' + this.getToken()
    }
  },
  getToken () {
    return localStorage.getItem('token')
  },
  setToken (token) {
    localStorage.setItem('token', token)
  },
  clearToken () {
    localStorage.removeItem('token')
  }
}
