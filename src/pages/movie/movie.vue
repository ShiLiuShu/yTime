<template>
  <div class="movie-root">
        <movie-head></movie-head>
        <!-- <div v-if="movieDetailBasic">{{movieDetailBasic.releaseDate}}</div>
        <div v-if="movieDetailAd">{{movieDetailAd.count}}</div>
        <div v-if="movieDetailLive">{{movieDetailLive.count}}</div>
        <div v-if="movieDetailRelated">{{movieDetailRelated.goodsCount}}</div> -->
        <div class="movie-resume" v-if="movieDetailBasic">
            <div class="movie-resume-image">
                <img :src="movieDetailBasic.img" >
            </div>
            <div class="movie-resume-title">
                <p class="movie-resume-title-cn">
                    {{movieDetailBasic.name}}
                </p>
                <p class="movie-resume-title-en">
                    {{movieDetailBasic.nameEn}}
                </p>
            </div>
            <div class="movie-resume-content">
                <div>{{movieDetailBasic.mins}}</div>
                <div>{{movieDetailBasic.type}}</div>
                <div>{{movieDetailBasic.releaseDate}}</div>
                <div class="oranged">{{movieDetailBasic.commentSpecial}}</div>
                <div class="tags">
                  <div v-if="movieDetailBasic.is3D">3D</div>
                  <div v-if="movieDetailBasic.isIMAX3D">IMAX</div>
                  <div v-if="movieDetailBasic.isDMAX">中国巨幕</div>
              </div>
            </div>
        </div>
        <div class="margin"></div>
        <Divider></Divider>

  </div>
</template>

<script>
import Divider from '../../components/Divider/Divider.vue'
import MovieHead from '../../components/MovieHead/MovieHead.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
      return {
        movieId:''
      }
  },
  created(){
    var that=this;
    this.movieId=this.$route.params.movieId;
    this.getMovieDetail({
        locationId:this.locationId,
        movieId:this.movieId
    });
  },
  components:{
      MovieHead,
      Divider
  },
  methods:{
      ...mapActions(['getMovieDetail'])
  },
  computed:{
      ...mapGetters(['locationId','movieDetail','movieDetailBasic','movieDetailRelated',
      'movieDetailAd','movieDetailLive'])
  }
}
</script>

<style lang="scss" scoped>
@import './movie.scss';
</style>