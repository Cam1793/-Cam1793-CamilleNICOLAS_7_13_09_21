<template>
  <div>
    <nav class="topnav">
      <div class="nav">
        <div class="nav-account">
          <ProfileImage :src="userData.imageUrl" customClass="account-btn__img" divCustomClass="div-account-img"/>
          <span id="user-name" class="d-lg-block">{{ userData.firstName }}</span>
        </div>
        <div id="nav-links" class="border-0">
          <p class="text">
            <a class="text-left" block @click="changeOrReloadPage('Posts')"><i class="fas fa-globe globe-navbar"></i> Accueil</a>
          </p>
          <p class="text">
            <a class="text-left" block @click="changeOrReloadPage('Profile')"><i class="fas fa-user-alt"></i> Mon profil</a >
          </p>
          <p class="text">
            <a class="text-left" block @click="logout"><i class="fas fa-sign-out-alt"></i> Déconnexion</a>
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { apiClient } from '../services/ApiClient'
import { mapState, mapActions } from 'vuex'
import ProfileImage from './ProfileImage'

export default {
  name: 'ProfileButton',
  components: {
    ProfileImage
  },
  props: {},
  data () {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      areActionsVisible: false
    }
  },
  methods: {
    toggleActions () {
      this.areActionsVisible = !this.areActionsVisible
    },
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    },
    changeOrReloadPage (name) {
      if (name === this.$route.name) return window.location.reload()
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="css">
.globe-navbar{
  font-size: initial;
}

#user-name{
  font-weight: bold;
}

.text-left{
  text-decoration: none !important;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.text-left:hover{
  color: rgba(253, 45, 6, 0.8) !important;
}

.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nav-account{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
}

#nav-links{
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 20px;
  padding-right: 20px;
}

@media screen and (max-width: 993px){
  .nav{
    flex-direction: column !important;
    align-items: center !important;
  }

  #nav-links{
    width: 100%;
    padding-right: 0px;
  }

  .nav-account{
    font-size: 20px;
  }
}

@media screen and (max-width: 783px){
  .text-left{
    font-size: 15px;
  }
}

@media screen and (min-width: 280px) and (max-width: 769px) {
  .account-btn {
    top: 28px;
    right: 20px;
    height: 25px;
    padding: 0;
  }
  
  .account-btn__img {
    height: 35px;
  }

  .div-account-img {
    width: 35px;
    height: 35px;
    margin-left: 0;
  }
}
</style>