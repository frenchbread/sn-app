import axe from '@/api'
import libAuth from '@/lib/auth'

export default {
  login (creds) {
    return axe.post('/users/auth', creds)
      .then(res => res.data)
      .catch(err => err)
  },
  validateToken () {
    return axe.get('/users/me', { headers: libAuth.getAuthHeader() })
      .then(res => res.data)
      .catch(err => err)
  }
}
