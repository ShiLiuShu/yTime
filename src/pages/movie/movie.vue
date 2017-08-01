<template>
  <div class="movie-root">
        <div class="bg">
            <img :src="movieDetailBasic.img" >
        </div>
        <movie-head></movie-head>
        <!-- <div v-if="movieDetailBasic">{{movieDetailBasic.releaseDate}}</div>
        <div v-if="movieDetailAd">{{movieDetailAd.count}}</div>
        <div v-if="movieDetailLive">{{movieDetailLive.count}}</div>
        <div v-if="movieDetailRelated">{{movieDetailRelated.goodsCount}}</div> -->
        <div class="movie-resume" v-if="movieDetailBasic" :key="movieId">
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
            <div class="movie-resume-rate" v-if="movieDetailBasic.overallRating>0">
                <p>{{movieDetailBasic.overallRating}}</p>
            </div>
        </div>
        <div class="margin"></div>
        <Divider v-if="movieDetailBasic"></Divider>
        <div class="movie-story" v-if="movieDetailBasic">
            <div>剧情：{{movieDetailBasic.story}}</div>
        </div>
        <Divider v-if="movieDetailBasic"></Divider>
        <div class="movie-chief" v-if="movieDetailBasic">
            <div class="movie-chief-director">
                <div class="director-title">导演</div>
                <div class="director-content">
                    <div class="director-content-image">
                        <img :src="movieDetailBasic.director.img" >
                        <div class="movie-chief-divider"></div>
                    </div>
                    <div class="director-content-text">
                        <p>{{movieDetailBasic.director.name}}</p>
                        <p>{{movieDetailBasic.director.nameEn}}</p>
                    </div>           
                </div>
            </div>           
            <div class="movie-chief-actor">
                <div class="actor-title">
                    <div>全部演员</div>
                </div>
                <div class="actor-content">
                    <div class="actor-item" v-for="actor in movieDetailBasic.actors" :key="actor.actorId">
                        <div class="actor-item-image">
                            <img :src="actor.img" >
                        </div>
                        <div class="actor-item-text">
                            <p>{{actor.name}}</p>
                            <p>{{actor.nameEn}}</p>
                            <p>饰：{{actor.roleName}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Divider v-if="movieDetailBasic"></Divider>
  </div>
</template>

<script>
import Divider from '../../components/Divider/Divider.vue'
import MovieHead from '../../components/MovieHead/MovieHead.vue'
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  data(){
      return {
        movieId:''
      }
  },
  created(){
    this.movieDetailBasic=null;
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
      ...mapActions(['getMovieDetail']),
      ...mapMutations(['clearMovieDetail'])
  },
  computed:{
      ...mapGetters(['locationId','movieDetail','movieDetailBasic','movieDetailRelated',
      'movieDetailAd','movieDetailLive'])
  },
  beforeDestroy(){
      this.clearMovieDetail();
  }

}
</script>

<style lang="scss" scoped>
@import './movie.scss';
</style>