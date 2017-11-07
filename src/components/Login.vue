<template lang="html">
 <div class="content grid">
   <div class="cell -3of12"></div>
    <div class="cell -6of12">

      <div class="form-holder">

        <h2>Login</h2>

        <div  v-if="!userIsAuthenticated" class="card">
          <form class="form" v-on:submit.prevent="submit()">
            <fieldset class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model="credentials.email"
              >
            </fieldset>
            <fieldset class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="credentials.password"
              >
            </fieldset>
            <div>
              <button class="btn btn-primary btn-block" type="submit">Let me in!</button>
            </div>
          </form>
        </div>
        <div v-else>
          <div class="card">
            <h3>You are logged in!</h3>
            <br />
            Go to <router-link :to="{ name: 'dashboard' }">dashboard</router-link> or <router-link :to="{ name: 'logout' }">logout</router-link>
          </div>
        </div>

        <div class="alert alert-error" v-if="error">
          {{ error }}
        </div>
      </div>

    </div>
    <div class="cell -3of12"></div>
  </div>
</template>

<script>
import libAuth from '@/lib/auth'
import store from '@/store'

export default {
  name: 'login',
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    submit () {
      if (this.credentials.email !== '' && this.credentials.password !== '') {
        libAuth.login(this, {
          email: this.credentials.email,
          password: this.credentials.password
        })
      } else {
        this.error = 'Authentication failed. Please check fields & try again.'
      }
    }
  },
  computed: {
    userIsAuthenticated () {
      return store.getters.userIsAuthenticated
    }
  }
}
</script>

<style lang="scss" scoped>

.form-holder {
  color: #fff;

  margin: 10em 0;
  text-align: center;

  .card {
    border: 3px solid #ccc;
    padding: 1em;
    border-radius: 3px;
    background-color: #fff;
    margin: 2em 0;
  }
}

</style>
