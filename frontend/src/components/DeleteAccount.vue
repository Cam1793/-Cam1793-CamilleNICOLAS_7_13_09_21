<template>
  <div>
    <div class="d-flex justify-content-center">
      <button id="btn-delete" class="delete-account d-flex justify-content-center align-items-center">
        <p id="delete-account-button" @click="onDeleteAccount" class="my-3 mr-1 mr-lg-2">Supprimer le compte </p>
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { apiClient } from '../services/ApiClient'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DeleteAccount',
  data () {
    return {
      userData: JSON.parse(localStorage.getItem('userData'))
    }
  },
  methods: {
    async onDeleteAccount () {
      this.$emit('onDeleteAccount')
      
    }
  }
}
</script>

<style lang="css">
#btn-delete{
  text-decoration: none !important;
}

#delete-account-button{
  font-weight: bold;
  font-size: 18px;
  color: rgba(253, 45, 6, 0.8);
  padding-right: 10px;
}

.delete-account {
  font-size: 14px;
  border-radius: 0.25rem;
  background-color: transparent;
  border: none;
}

.delete-account:hover {
  text-decoration: underline;
}

.delete-account:focus {
  outline: none;
}
</style>