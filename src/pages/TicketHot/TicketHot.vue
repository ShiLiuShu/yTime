<template>
  <div class="ticket-hot-root" v-if="isHotMovies.length">
      <div class="ticket-hot-item"  v-for="movie in isHotMovies" :key="movie.id">
          <div class="image">
              <img :src="movie.img">
          </div>
          <div class="content">
              <p class="title">{{movie.tCn}}</p>
              <p class="special">{{movie.commonSpecial}}</p>
              <p class="time">{{movie.rd}}上映</p>
              <p class="cinema">今日{{movie.NearestCinemaCount}}家影院上映{{movie.NearestShowtimeCount}}场</p>
              <p class="tags"></p>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
      return {
        
      }
  },
  created(){
    
  },
  mounted(){
    this.getIsHotMovies({
        locationId:this.locationId
    });
  },
  methods:{
    ...mapActions(['getIsHotMovies'])
  },
  computed:{
      ...mapGetters(['isHotMovies','locationId'])
  }
}
</script>

<style lang="scss" scoped>
@import './TicketHot.scss';
</style>