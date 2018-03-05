<template>
  <div class="cinemaDetail-root">
      <div class="root-head">
        <div class="head-title">{{cinema.name}}</div>
        <div class="head-location">{{cinema.address}}</div>
        <div class="head-feature">
          <span v-if="cinema.feature.has3D">3D厅</span>
          <span v-if="cinema.feature.has4D">4D厅</span>
          <span v-if="cinema.feature.hasPark">停车场</span>
          <span v-if="cinema.feature.hasFood">餐饮</span>
          <span v-if="cinema.feature.hasGame">游乐场</span>
          <span v-if="cinema.feature.hasIMAX">IMAX厅</span>
          <span v-if="cinema.feature.hasLoveseat">情侣座</span>
          <span v-if="cinema.feature.hasServiceTicket">自助取票</span>
          <span v-if="cinema.feature.hasVIP">VIP厅</span>
          <span v-if="cinema.feature.hasWifi">WiFi</span>
        </div>
      </div>
      <div class="root-slider">
         <div class="slider-item" v-for="item in movies" :key="item.movieId" v-if="movies">
           <img :src="item.img"/> 
        </div> 
      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import Divider from '../../components/Divider/Divider.vue'
export default {
  data(){
      return {
        
      }
  },
  created(){
    this.cinemaId=this.$route.params.cinemaId;
    console.log(this.cinemaId);
    this.getCinemaById(this.cinemaId);
  },
  methods:{
    ...mapActions(['getCinemaById'])
  },
  computed:{
    ...mapGetters(['cinemaDetail']),
    cinema(){
      return this.cinemaDetail.cinema;
    },
    movies(){
      return this.cinemaDetail.movies;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './CinemaDetail.scss';
</style>