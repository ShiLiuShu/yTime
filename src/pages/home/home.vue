<template>
  <div class="home-root">
      <p>this is the {{message}} page</p>
  </div>
</template>

<script>
export default {
  data(){
      return {
          message:"home"
      }
  }
}
</script>

<style lang="scss" scoped>
@import './home.scss'
</style>
