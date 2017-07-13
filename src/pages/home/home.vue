<template>
  <div class="home-root">
      <home-swiper :imgList="topPosters" v-if="topPosters.length"></home-swiper>
      <div class="under-search">
          <div class="under-search-left">
              <p>正在售票·深圳</p>
          </div>
          <div class="under-search-right-text">
              <p>共{{mainPageMovies.length}}部</p>
          </div>
          <div class="under-search-right-image">
              <img src="../../assets/right_arrow.png" alt="under-search-image">
          </div>
      </div>
      <hot-gallery :movies="mainPageMovies" v-if="mainPageMovies.length"></hot-gallery>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
import HomeSwiper from '../../components/HomeSwiper/HomeSwiper.vue'
import HotGallery from '../../components/HotGallery/HotGallery.vue'


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
    HomeSwiper,
    HotGallery
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
