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
    },
    clearMovieDetail(state){
        state.movieDetailBasic='';
        state.movieDetailAd='';
        state.movieDetailLive='';
        state.movieDetailRelated='';
    }

}




export default{
    state,
    getters,
    actions,
    mutations
}