import getData from '../../api/getData'
import * as types from '../mutation-types'


const state={
    locationId:0,
    mainPageMovies:[]
}

const getters={
    locationId:state=>state.locationId,
    mainPageMovies:state=>state.mainPageMovies
}


const actions={
    async getMainPageMovies({commit},payload){
        let data=await getData.fetchMainPageMovies(payload.locationId);
        commit(types.GET_MAINPAGEMOVIES,data.data.movies);
    },

    setLocation({commit},payload){
        commit(types.SET_LOCATION,payload.locationId);
    }
}


const mutations={
    [types.GET_MAINPAGEMOVIES](state,mainPageMoviesData){
        state.mainPageMovies=mainPageMoviesData;
    },
    [types.SET_LOCATION](state,locationId){
        state.locationId=locationId;
    }

}


export default{
    state,
    getters,
    actions,
    mutations
}