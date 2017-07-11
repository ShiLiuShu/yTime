<template>
    <div class="home-swiper-root">
        <swiper :options="swiperOption" ref="mySwiper">
            <div class="swiper-slide" v-for="img in imgList" :key="img.gotoPage.parameters.newId">
                <img :src="img.img">
            </div>
            <div class="swiper-pagination swiper-pagination-white"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'

export default {
  data(){
      return {
        swiperOption: {
          autoplay: 5000,
          pagination: '.swiper-pagination',
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          mousewheelControl:true,
          paginationClickable:true,
          autoplayDisableOnInteraction :false,
          scrollbar:null,
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
  },
  computed:{
    swiper(){
        return this.$refs.mySwiper.swiper;
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
@import './HomeSwiper.scss';
</style>