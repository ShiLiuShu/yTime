import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import movies from './module/movies'
import movieDetails from './module/movieDetail'
import person from './module/person'



Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules:{
        movies,
        movieDetails,
        person
    }
})