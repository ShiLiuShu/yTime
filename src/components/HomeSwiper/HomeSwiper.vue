<template>
    <div class="home-swiper-root">
        <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="img in imgList" :key="img.gotoPage.parameters.newId">
                    <img :src="img.img">
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper/ssr'

export default {
  data(){
      return {
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          pagination: '.swiper-pagination',
          paginationClickable:true,
          paginationType:'progress',
          scrollbar:null,
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
  },
  props:['imgList'],
  components:{
      swiper,
      swiperSlide
  },
}
</script>

<style lang="scss" scoped>
@import './HomeSwiper.scss'
</style>