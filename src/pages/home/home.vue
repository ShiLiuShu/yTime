<template>
  <div class="home-root">
      <p v-if="mainPageMovies.length">there are {{mainPageMovies.length}} movies</p>
      <p v-if="hotPoints.length">{{hotPoints.length}}</p>
      <p v-if="topPosters.length">{{topPosters.length}}</p>
      <home-swiper :imgList="topPosters" v-if="topPosters.length"></home-swiper>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
import HomeSwiper from '../../components/HomeSwiper/HomeSwiper.vue'

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
  components:{
    HomeSwiper
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
