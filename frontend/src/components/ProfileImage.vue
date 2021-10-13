<template>
  <div :class="divCustomClass">
    <img id="avatar-img" alt="Image du profil" :class="customClass" :src="src || 'avatar-placeholder.jpg'" />
  </div>
</template>

<script>
export default {
  name: 'ProfileImage',
  props: ['customClass', 'divCustomClass', 'src']
}
</script>

<style lang="css">
#avatar-img{
  border-radius: 100%;
  max-width: 50px;
}
</style>