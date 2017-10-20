import axe from '@/api'
import libAuth from '@/lib/auth'

export default {
  add (data) {
    return new Promise((resolve, reject) => {
      axe.post('/accounts', data, { headers: libAuth.getAuthHeader() })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  },
  getAll () {
    return new Promise((resolve, reject) => {
      axe.get('/accounts', { headers: libAuth.getAuthHeader() })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  },
  remove (id) {
    return new Promise((resolve, reject) => {
      axe.delete(`/accounts/${id}`, { headers: libAuth.getAuthHeader() })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }
}
