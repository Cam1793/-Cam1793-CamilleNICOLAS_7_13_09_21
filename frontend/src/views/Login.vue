<template>
  <div class="page-container">
    <div
      id="nav"
      class="d-flex justify-content-start justify-content-sm-center mb-3 p-4"
    >
      <router-link to="/">
      <div id="logo">
        <img
          id="logo-icon"
          :src="require('../assets/logos/icon-above-font.png')"
          alt="logo Groupomania"
        />
        </div>
      </router-link>
  </div>
    <b-container fluid>
      <b-row class="text-center justify-content-center">
        <b-col cols="12" lg="4">
          <b-card id="card-login" class="border-0 shadow p-3 mb-5 mt-3 bg-white">
            <div class="pt-sm-3 pt-lg-0">
              <b-card-text class="login-text h4"><p id="login-title">SE CONNECTER</p></b-card-text>

              <b-form>
                <b-form-group>
                  <b-form-input
                    id="email"
                    type="email"
                    placeholder="Email"
                    v-model="input.email"
                    class="account-input text-dark mb-2 mt-4 pl-3 w-100"
                  ></b-form-input>
                  <b-form-input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="input.password"
                    class="account-input text-dark mb-2 pl-3 w-100"
                  ></b-form-input>
                </b-form-group>

                <b-button
                  v-on:click.stop="login()"
                  type="submit"
                  id="login-button"
                  class="account-btn font-weight-bold"
                >
                  Connexion
                </b-button>
                <p class="my-3 text-danger">{{ errorMessage }}</p>
              </b-form>
            </div>
            <div class="line my-3"></div>

            <p class="font-small grey-text d-flex justify-content-center mb-1">
              Pas encore inscrit ?
              <router-link to="/signup" class="font-weight-bold ml-1">
                <p id="create-account">Créer un compte</p>
              </router-link>
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Signup from '../components/Signup'
import { apiClient } from '../services/ApiClient'
import router from '../router/index'

export default {
  name: 'Login',
  components: {
    Signup
  },
  props: ['notification'],
  data () {
    return {
      errorMessage: '',
      input: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    if (this.$route.query.deletedAccount) {
      this.$bvToast.toast('Votre compte a bien été supprimé', {
        title: 'Notification',
        autoHideDelay: 4000
      })
    }
  },
  methods: {
    login () {
      if (this.input.email != '' && this.input.password != '') {
        apiClient
          .post('api/auth/login', this.input)
          .then(data => {
            if (!data.token) {
              this.errorMessage = 'Mot de passe incorrect'
            } else {
              localStorage.setItem('userToken', data.token)
              localStorage.setItem('userData', JSON.stringify(data.user))
              router.push({ name: 'Posts' })
            }
          })
          .catch(error => {
            console.log({ error: error })
            this.errorMessage = 'Problème de connexion'
          })
      } else {
        this.errorMessage = 'Veuillez renseigner un email et un mot de passe'
      }
    }
  }
}
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
  color: #2c3e50 !important;
}

#create-account{
  margin-left: 10px;
  font-weight: bold;
  color: rgba(253, 45, 6, 0.8);
}

#login-title{
  color: rgba(253, 45, 6, 0.8);
  font-weight: bold;
}

#card-login{
  border-radius: 20px;
}

#logo-icon{
  width: 500px;
  margin-top: 100px;
}

#nav{
  margin: 0;
  padding: 0;
}

.line {
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgba(192, 192, 192, 0.5);
}

.account-btn {
  background-color: rgba(253, 45, 6, 0.8) !important;
  color: white !important;
  border-radius: 1rem;
  border: none;
  margin-bottom: 1rem;
  margin-top: 20px;
  font-weight: bold;
  padding: 5px 10px 5px 10px;
}

.account-btn:hover{
  background-color: #fff !important;
  color: black !important;
}

.account-btn:focus{
  background-color: rgb(253, 45, 6) !important;
  color: white !important;
}

.account-btn:active {
  background-color: rgb(253, 45, 6) !important;
  color: white !important;
}

.account-input {
  border: none;
}

.account-input:focus {
  border: none;
  border-radius: 6px;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(32, 120, 244, 0.5);
}

@media screen and (max-width: 770px){
  #logo-icon{
    margin-left:-120px;
    width: 30em;
  }
}

@media screen and (max-width: 767px){
  #logo-icon{
    margin-left: -170px;
    width: 40em;
  }
}

@media screen and (max-width: 551px){
  #logo-icon{
    margin-left: -140px;
    width: 35em;
  }
}

@media screen and (max-width: 461px){
  #logo-icon{
    margin-left: -120px;
    width: 32em;
  }
}

@media screen and (max-width: 380px){
  #logo-icon{
    margin-left: -80px;
    width: 25em;
  }
}

@media screen and (min-width: 280px) and (max-width: 769px) {
  .card-body {
    padding: 0.7rem;
  }
  .shadow {
    box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.08) !important;
  }
  
  .login-text {
    font-size: 1.1rem;
  }
}
</style>