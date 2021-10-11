<template>
  <div>
    <Navbar />
    <div
      id="nav"
      class="d-flex justify-content-start justify-content-sm-center mb-3 p-4"
    >
    </div>
    <b-row class="text-center justify-content-center">
      <b-col cols="12" lg="6">
        <b-card id="card-border"
          class="mx-auto border-0 shadow p-lg-3 mb-2 mb-lg-5 mt-lg-3 bg-white"
        >
          <b-form @submit="editUser">
            <div class="d-flex align-items-center flex-column">
              <ProfileImage
                @click="triggerInput"
                :src="url || userData.imageUrl"
                customClass="profile-main-picture"
                divCustomClass="div-main-picture"
              />
            </div>
            <b-form-group>
              <button
                class="create-button btn-block w-50 mx-auto mb-3 d-flex align-items-center justify-content-center"
                @click="triggerInput"
                type="button"
              >
                <span class="button-text mr-2 d-none d-md-block"
                  >Modifier ma photo de profil</span
                >
                <span class="button-text mr-2 d-md-none d-lg-none d-xl-none"
                  >Modifier ma photo de profil</span
                >
                <i class="fas fa-paperclip"></i>
              </button>
              <div class="d-flex align-items-center">
                <b-col sm="10">
                  <input
                    ref="fileUpload"
                    class="d-none"
                    type="file"
                    @change="onFileSelected"
                  />
                </b-col>
              </div>
              <div class="d-flex align-items-center">
                <b-col sm="2" class="d-none d-lg-block p-0">
                  <label for="firstName"> Prénom </label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="firstName"
                    type="text"
                    placeholder="Prénom"
                    v-model="input.firstName"
                    class="text-dark mb-2 pl-lg-3"
                  ></b-form-input>
                </b-col>
              </div>
              <div class="d-flex align-items-center">
                <b-col sm="2" class="d-none d-lg-block p-0">
                  <label for="lastName"> Nom </label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="lastName"
                    type="text"
                    placeholder="Nom"
                    v-model="input.lastName"
                    class="text-dark mb-2 pl-lg-3"
                  ></b-form-input>
                </b-col>
              </div>
              <div class="d-flex align-items-center">
                <b-col sm="2" class="d-none d-lg-block p-0">
                  <label for="email"> Email </label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="email"
                    type="email"
                    placeholder="Email"
                    v-model="input.email"
                    class="text-dark mb-2 pl-lg-3"
                    disabled
                  ></b-form-input>
                </b-col>
              </div>
            </b-form-group>
            <button
              type="submit"
              :class="`save-btn ${emptyInput ? 'disabled' : ''}`"
              :disabled="emptyInput"
              aria-label="Enregistrer"
            >
              Enregistrer
            </button>
          </b-form>

          <UserDeleteAccount />
        </b-card>
      </b-col>
    </b-row>

    <PostsList :userId="userData.id" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { apiClient } from '../services/ApiClient'
import ProfileImage from '../components/ProfileImage'
import PostsList from '../components/PostsList'
import UserDeleteAccount from '../components/UserDeleteAccount'
import Navbar from '../components/Navbar'

export default {
  name: 'Profile',
  components: {
    ProfileImage,
    PostsList,
    UserDeleteAccount,
    Navbar
  },
  data () {
    const userData = JSON.parse(localStorage.getItem('userData'))
    return {
      userData,
      input: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email
      },
      selectedFile: null,
      url: null
    }
  },
  methods: {
    onFileSelected () {
      this.url = URL.createObjectURL(event.target.files[0])
      this.selectedFile = event.target.files[0]
    },

    triggerInput () {
      this.$refs.fileUpload.click()
    },

    editUser (event) {
      let body = this.input

      const isFormData = !!this.selectedFile

      if (isFormData) {
        const formData = new FormData()
        formData.append('image', this.selectedFile)
        formData.append('user', JSON.stringify(body))
        body = formData
      }
      apiClient.put('api/auth/edit', body, { isFormData }).then(res => {
        localStorage.setItem('userData', JSON.stringify(res.user))
        this.userData = res.user
        this.$bvToast.toast('Changements enregistrés', {
          title: 'Notification',
          autoHideDelay: 4000
        })
        window.location.reload()
      })
    }
  },
  computed: {
    emptyInput () {
      return (
        !this.input.firstName.trim().length ||
        !this.input.lastName.trim().length
      )
    }
  }
}
</script>

<style lang="css">
#card-body{
  margin-top: 200px;
}

#card-border{
  border-radius: 20px;
  padding: 20px 20px 0px 20px;
}

#change-image-profil{
  font-weight: bold;
}

.row {
  margin-left: 0;
  margin-right: 0;
}

.div-main-picture {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 100%;
  margin-bottom: 1rem;
  background: black;
}

.profile-main-picture {
  padding-top: 17px;
  height: 70px;
  transform: scale(2.5);
}

.custom-file-label {
  text-align: left;
}

.save-btn {
  background-color: rgba(253, 45, 6, 0.8) !important;
  color: white !important;
  border-radius: 1rem;
  border: none;
  margin-bottom: 1rem;
  margin-top: 10px;
  font-weight: bold;
  padding: 5px 10px 5px 10px;
  font-size: 17px;
}

.save-btn:hover{
  background-color: #fff !important;
  color: black !important;
}

.save-btn:focus{
  background-color: rgb(253, 45, 6) !important;
  color: white !important;
}

.save-btn:active {
  background-color: rgb(253, 45, 6) !important;
  color: white !important;
}

.card-body {
  padding-bottom: 0;
}

@media screen and (max-width: 990px){
  #form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #firstName{
    width: 50em;
  }

  #lastName{
    width: 50em;
  }

  #email{
    width: 50em;
  }
}

@media screen and (max-width: 852px){ 
  #firstName{
    width: 40em;
  }

  #lastName{
    width: 40em;
  }

  #email{
    width: 40em;
  }
}

@media screen and (max-width: 528px){ 
  #firstName{
    width: 30em;
  }

  #lastName{
    width: 30em;
  }

  #email{
    width: 30em;
  }
}

@media screen and (max-width: 434px){ 
  #firstName{
    width: 25em;
  }

  #lastName{
    width: 25em;
  }

  #email{
    width: 25em;
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

  .create-button {
    width: 100% !important;
  }

  .div-main-picture {
    width: 75px;
    height: 75px;
  }
  
  .profile-main-picture {
    height: 75px;
  }
}
</style>