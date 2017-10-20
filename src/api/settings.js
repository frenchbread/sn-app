import axe from '@/api'
import libAuth from '@/lib/auth'

export default {
  get () {
    return new Promise((resolve, reject) => {
      axe.get('/settings', { headers: libAuth.getAuthHeader() })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  },
  add (data) {
    return new Promise((resolve, reject) => {
      axe.post('/settings', data, { headers: libAuth.getAuthHeader() })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  },
  update (data) {
    return new Promise((resolve, reject) => {
      axe.put('/settings', data, { headers: libAuth.getAuthHeader() })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }
}
