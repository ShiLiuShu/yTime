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
         <div class="slider-item" v-for="(item,index) in movies" :key="item.movieId" v-if="movies"
         :data-index="index" :data-loc="index" @click="_eventClick($event,index)" ref="slider">
            <img :src="item.img"/>  
        </div> 
        <div class="slider-background"></div>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import Divider from '../../components/Divider/Divider.vue'
export default {
  data(){
      return {
        currentIndex:0
      }
  },
  created(){
    this.cinemaId=this.$route.params.cinemaId;
    console.log(this.cinemaId);
    this.getCinemaById(this.cinemaId);
  },
  methods:{
    ...mapActions(['getCinemaById']),
    _eventClick(event,index,ref){
      console.log(index);
      let selectIndex=index;
      if(selectIndex==this.currentIndex){
        return;
      }
      this.currentIndex=selectIndex;
      //alert(this.$refs.slider.length);
      let trans_x=6-this.currentIndex*4.8;
      this.$refs.slider.forEach((item,index)=>{
        if(index==this.currentIndex){
          this.$refs.slider[index].style.webkitTransform="translateX("+trans_x+"rem) scale(1.2)";
          //this.$refs.slider[index].style.marginTop="1rem";
        }else{
          this.$refs.slider[index].style.webkitTransform="translateX("+trans_x+"rem)";
          //this.$refs.slider[index].style.marginTop=".1rem";
        }
      });   
    }
    // _render(){
    //   let trans_x=3.6-this.currentIndex*3.6;
    //   console.log(trans_x);
    // }
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