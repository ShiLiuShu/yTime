<template>
  <div class="home-root">
      <p v-if="mainPageMovies.length">there are {{mainPageMovies.length}} movies</p>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'

export default {
  data(){
      return {
          message:"home2"
      }
  },
  computed:{
      ...mapGetters(['mainPageMovies','locationId'])
  },
  created(){
      //同步设置区域id
      this.$store.dispatch('setLocation',{
          locationId:290
      })
      //异步获取热映电影数据
      this.$store.dispatch('getMainPageMovies',{
          locationId:this.locationId
      });
      console.log("exx");
  }
}
</script>

<style lang="scss" scoped>
@import './home.scss'
</style>
