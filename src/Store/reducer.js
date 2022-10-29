import { createStore } from 'redux';
import axios from 'axios';

let res;
let getAllMovies = 'GETALLMOVIES'
let getMovieById = "GET_MOVIE_BY_ID";
let addToMyList = "ADD_TO_MY_LIST";
let addToLikes = "ADD_TO_LIKES";
const signUp = "REGISTER";
const login = "LOGIN";
const removeIndividualMovie = "REMOVE_INDIVIDUAL_LIST";
const removeIndividualLike = "REMOVE_INDIVIDUAL_LIKE";
const loOut = "LOG_OUT";
const filtered = 'EDIT_TEXT_FILTER';
const add = "ADD_MOVIE";
const Admin_remove = "ADMIN_REMOVE";
const Admin_edit = "ADMIN_EDIT";


const initialState = {
    allMovies: [],
    selectedMovie: {},
    addToWatchLater: [],
    addToFavourites: [],
    users: [],
    movieToEdit: {},
    filters: [],
    filteredMovie: {},
    admin: {
        email: "admin@movies.com",
        name: "admin",
        password: "123456"
    }
}

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
        case filtered:
            return { ...state, filters: payload }
        case addToMyList:
            return { ...state, addToWatchLater: [...state.addToWatchLater, payload] }
        case addToLikes:
            return { ...state, addToFavourites: [...state.addToFavourites, payload] }
        case signUp:
            return { ...state, users: [...state.users, payload] }
        case login:
            return { ...state, user: action.user }
        case removeIndividualMovie: {
            return { ...state, addToWatchLater: [payload] }
        }
        case removeIndividualLike: {
            return { ...state, addToFavourites: [payload] }
        }
        case add: {
            return { ...state, allMovies: [...state.allMovies, payload] }
        }
        case loOut:
            return { ...state, user: null }
        case Admin_remove:
            return { ...state, allMovies: payload }
        case Admin_edit:
            return { ...state, movieToEdit: payload }
        default:
            return state;
    }
}
const store = createStore(reducer);

export default store;
