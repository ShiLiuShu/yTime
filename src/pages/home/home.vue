<template>
  <div class="home-root">
      <p v-if="mainPageMovies.length">there are {{mainPageMovies.length}} movies</p>
      <p v-if="hotPoints.length">{{hotPoints.length}}</p>
      <p v-if="topPosters.length">{{topPosters.length}}</p>
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
      ...mapGetters(['mainPageMovies','locationId','hotPoints','topPosters'])
  },
  methods:{
    ...mapActions(['setLocation','getMainPageMovies','getFirstPageAdvAndNews'])
  },
  created(){
      //同步设置区域id
      this.setLocation({
          locationId:290
      });
      //异步获取热映电影数据
      this.getMainPageMovies({
          locationId:this.locationId
      });
      this.getFirstPageAdvAndNews();
  }
}
</script>

<style lang="scss" scoped>
@import './home.scss'
</style>
