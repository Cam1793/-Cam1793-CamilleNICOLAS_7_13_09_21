<template>
  <div>
    <b-button
      pill
      @click="toggleActions"
      variant="outline-secondary"
      v-if="isAdmin || isCreator"
      :class="customClass"
      class="post-button close d-block position-absolute"
      ><i class="fas fa-globe"></i></b-button
    >
    <b-collapse
      v-bind:class="
        `${classCollapse ||
          ''} button-collapsed collapsed mt-2 position-absolute ${areActionsVisible &&
          'visible'}`
      "
    >
      <div class="border-0" @click="toggleActions">
        <p class="card-text" v-if="isCreator">
          <b-button
            class="text-left w-100"
            v-if="editingPost && isCreator"
            block
            v-b-modal="`modal-${elementId}`"
          >
            <i class="far fa-edit edit"></i>
            <span class="edit-post">{{ modifyText }}</span></b-button
          >
          <b-button 
            class="text-left w-100" 
            v-if="!editingPost && isCreator" 
            @click="clickedEditButton">
            <i class="far fa-edit"></i><span>{{ modifyText }}</span></b-button>
          <slot></slot>
        </p>
        <p class="card-text">
          <b-button
            class="text-left w-100"
            v-if="isAdmin || isCreator"
            block
            v-on:click="onDelete">
             <i class="fas fa-trash trash"></i>
            <span class="trash-post">{{ deleteText }}</span></b-button
          >
        </p>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import { apiClient } from '../services/ApiClient'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EditPost',
  props: [
    'post',
    'customClass',
    'classCollapse',
    'isAdmin',
    'isCreator',
    'elementId',
    'modifyText',
    'deleteText',
    'editingPost'
  ],
  data () {
    return {
      areActionsVisible: false
    }
  },
  methods: {
    toggleActions () {
      this.areActionsVisible = !this.areActionsVisible
    },

    async onDelete () {
      this.$emit('onDelete')
    },

    async clickedEditButton () {
      this.$emit('clickedEditButton')
    }
  }
}
</script>

<style lang="css">
.fa-globe{
  margin-top: 5px;
  font-size: 20px;
}

.fa-globe:hover{
  color: rgba(253, 45, 6, 0.8);
}

.edit-post{
  font-size: 15px;
}

.trash-post{
  font-size: 15px;
}

.edit{
  margin-right: 5px;
}

.trash{
  margin-right: 5px;
}

.post-button {
  top: 20px;
  right: 10px;
  padding: 1px 18px 10px !important;
  border: none;
  background-color: transparent !important;
}

.btn-secondary {
  font-weight: 500;
  color: #000;
  background-color: white;
  border: none;
}

.btn-outline-secondary{
  color: #000 !important;
  box-shadow: none !important;
}

.btn-secondary{
  color: #000 !important;
  background-color: rgba(108, 117, 125, 0.1) !important;
  box-shadow: none !important;
}

.btn-secondary:hover{
  color: #000 !important;
  background-color: rgba(108, 117, 125, 0.1) !important;
  box-shadow: none !important;
}

.btn-secondary:active{
  color: #000 !important;
  background-color: rgba(108, 117, 125, 0.1) !important;
  box-shadow: none !important;
}
  
.btn-secondary:focus {
  color: #000 !important;
  background-color: rgba(108, 117, 125, 0.1) !important;
  box-shadow: none !important;
}

.button-collapsed {
  top: 50px;
  right: 11px;
  z-index: 2;
}

.collapsed {
  visibility: hidden;
  display: block !important;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.1s, opacity 0.5s ease-in-out;
  opacity: 0;
}

.card-body {
  padding: 1rem;
  box-shadow: 0px 1px 5px 4px rgba(204, 204, 204, 0.2);
}

.visible {
  visibility: visible;
  opacity: 1;
  transform: scaleY(1);
}

@media screen and (min-width: 280px) and (max-width: 767px) {
  .collapsed {
    padding: 0.5rem;
    box-shadow: 0px 1px 2px 2px rgba(204, 204, 204, 0.2);
  }

  .card-body {
    padding: 0.5rem;
    box-shadow: 0px 1px 2px 2px rgba(204, 204, 204, 0.2);
  }
  
  .button-collapsed {
    top: 37px;
    right: 10px;
  }

  .post-button {
    padding: 1px 10px 6px !important;
    font-size: 15px !important;
  }
}
</style>