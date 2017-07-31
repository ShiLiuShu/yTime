import getData from '../../api/getData'
import * as types from '../mutation-types'


const state={
    movieDetailBasic:'',
    movieDetailLive:'',
    movieDetailAd:'',
    movieDetailRelated:''
}

const getters={
    movieDetailBasic:state=>state.movieDetailBasic,
    movieDetailLive:state=>state.movieDetailLive,
    movieDetailAd:state=>state.movieDetailAd,
    movieDetailRelated:state=>state.movieDetailRelated
}


const actions={
    async getMainPageMovies({commit},payload){
        let data=await getData.fetchMainPageMovies(payload.locationId);
        commit(types.GET_MAINPAGEMOVIES,data.data.movies);       
    },

    setLocation({commit},payload){
        commit(types.SET_LOCATION,payload.locationId);
    },

    async getFirstPageAdvAndNews({commit}){
        let data=await getData.fetchFirstPageAdvAndNews();
        commit(types.GET_FIRSTPAGEADVANDNEWS,data.data);
    },

    async getIsHotMovies({commit},payload){
        let data=await getData.fetchIsHotMovies(payload.locationId);
        commit(types.GET_ISHOTMOVIES,data.data.ms);
    },

    async getIsComingMovies({commit},payload){
        let data=await getData.fetchIsComingMovies(payload.locationId);
        commit(types.GET_ISCOMINGMOVIES,data.data);
    },

    async getMovieDetail({commit},payload){
        let data=await getData.fetchMovieDetail(payload.locationId,payload.movieId);
        commit(types.GET_MOVIEDETAIL,data.data.data);
    }
}


const mutations={
    [types.GET_MOVIEDETAIL](state,movieDetail){
        state.movieDetail=movieDetail;
        state.movieDetailBasic=movieDetail.basic;
        state.movieDetailLive=movieDetail.live;
        state.movieDetailAd=movieDetail.advertisement;
        state.movieDetailRelated=movieDetail.related;
        //console.log(state.movieDetail);
    }

}




export default{
    state,
    getters,
    actions,
    mutations
}