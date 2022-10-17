import { createStore } from 'redux';
import axios from 'axios';

const initialState = {
    allMovies: [],
    selectedMovie: {},
    addToWatchLater: [],
    addToFavourites: []
}
let res;
let getAllMovies = 'GETALLMOVIES'
let getMovieById = "GET_MOVIE_BY_ID";
let addToMyList = "ADD_TO_MY_LIST";
let addToLikes = "ADD_TO_LIKES";

const myAPI = axios.get("https://api.themoviedb.org/3/tv/popular?api_key=ac574edbf65384b1c76555da77eaffc1&language=en-US&page=1")
    .then(response => {
        res = response.data.results;
        store.dispatch({
            type: getAllMovies,
            payload: res
        })
    })
    .catch(err => console.log(err))

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case getAllMovies:
            return { ...state, allMovies: payload }
        case getMovieById:
            return { ...state, selectedMovie: payload }
        case addToMyList:
            return { ...state, addToWatchLater: [...state.addToWatchLater, payload] }
        case addToLikes:
            return { ...state, addToFavourites: [...state.addToFavourites, payload] }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
