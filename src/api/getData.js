import axios from 'axios'


function fetch(url,methods,params){
    if(methods=='post'){
        return new Promise(function(resolve,reject){
            axios.post(url,params).then(res=>resolve(res)).catch(err=>reject(err));
        });
    }else if(methods='get'){
        return new Promise(function(resolve,reject){
            axios.get(url,params).then(res=>resolve(res)).catch(err=>reject(err));
        });
    }else{
        return Promise.reject('error method');
    } 
}


const fetchMainPageMovies=id=>{
    return fetch('/PageSubArea/HotPlayMovies.api?locationId='+id);
}

const fetchFirstPageAdvAndNews=()=>{
    return fetch('/PageSubArea/GetFirstPageAdvAndNews.api');
}

const fetchIsHotMovies=id=>{
    return fetch('/Showtime/LocationMovies.api?locationId='+id);
}

const fetchIsComingMovies=id=>{
    return fetch('/Movie/MovieComingNew.api?locationId='+id);
}

const fetchMovieDetail=(locationId,movieId)=>{
    return fetch('/movie/detail.api?locationId='+locationId+'&movieId='+movieId);
}

export default{
    fetchMainPageMovies,fetchFirstPageAdvAndNews,fetchIsHotMovies,fetchIsComingMovies,
    fetchMovieDetail
}