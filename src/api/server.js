import axe from '@/api'

export default {
  checkStatus () {
    return new Promise((resolve, reject) => {
      axe.get('/')
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }
}
