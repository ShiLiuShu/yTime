import getData from '../../api/getData'
import * as types from '../mutation-types'


const state={
    locationId:0,
    mainPageMovies:[],
    hotPoints:[],
    topPosters:[]
}

const getters={
    locationId:state=>state.locationId,
    mainPageMovies:state=>state.mainPageMovies,
    hotPoints:state=>state.hotPoints,
    topPosters:state=>state.topPosters
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
    }
}


const mutations={
    [types.GET_MAINPAGEMOVIES](state,mainPageMoviesData){
        state.mainPageMovies=mainPageMoviesData;
    },
    [types.SET_LOCATION](state,locationId){
        state.locationId=locationId;
    },
    [types.GET_FIRSTPAGEADVANDNEWS](state,firstPageData){
        state.hotPoints=firstPageData.hotPoints;
        state.topPosters=firstPageData.topPosters;
    }

}




export default{
    state,
    getters,
    actions,
    mutations
}