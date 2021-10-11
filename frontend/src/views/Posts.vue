<template>
  <div id="posts">
    <div>
      <Navbar />
    </div>
    <router-link to="/">
        <img
          id="logo"
          :src="require('../assets/logos/icon.png')"
          alt="logo Groupomania"
        />
      </router-link>
    <b-row class="align-items-center text-center justify-content-center">
      <b-col cols="12" lg="6">
        <b-card id="card-post"
          class="mx-auto mb-2 mt-lg-3 mb-lg-5 border-0 shadow px-lg-3 pt-lg-4 bg-white"
        >
          <CreatePost @displayNotification="displayNotification" />
        </b-card>
      </b-col>
    </b-row>
    <PostsList />
  </div>
</template>

<script>
import { apiClient } from '../services/ApiClient'
import router from '../router/index'
import { mapState, mapActions } from 'vuex'
import CreatePost from '../components/CreatePost'
import PostsList from '../components/PostsList'
import Navbar from '../components/Navbar'

export default {
  name: 'Posts',
  components: {
    CreatePost,
    PostsList,
    Navbar
  },
  data () {
    return {
      userData: JSON.parse(localStorage.getItem('userData'))
    }
  },
  methods: {
    displayNotification (text) {
      this.$bvToast.toast(text, {
        title: 'Notification',
        autoHideDelay: 4000
      })
    }
  },
  computed: {
    ...mapState(['companyName'])
  }
}
</script>

<style lang="css">
.card-body {
  padding: 20px 20px 20px 20px;
  background-color: #fff;
  border-radius: 15px;
}

#card-post{
  border-radius: 20px;
  padding: 20px 20px 20px 20px;
}

.row {
  margin-left: 0;
  margin-right: 0;
}

@media screen and (max-width: 993px){
  #logo{
    width: 20em;
  }
}

@media screen and (max-width: 769px){
  #logo{
    width: 25em !important;
  }
}

@media screen and (max-width: 413px){
  #logo{
    width: 15em !important;
  }
}

@media screen and (min-width: 280px) and (max-width: 769px) {
  .card-body {
    padding: 0.7rem;
    padding-bottom: 0;
  }

  .shadow {
    box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.08) !important;
  }
}
</style>