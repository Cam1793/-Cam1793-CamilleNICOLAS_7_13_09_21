<template>
  <div :class="divCustomClass">
    <img id="avatar-img" :class="customClass" :src="src || 'avatar-placeholder.jpg'" />
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
  max-width: 50px;
}
</style>