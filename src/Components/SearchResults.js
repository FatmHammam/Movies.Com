import store from '../Store/reducer';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import bg from '../Images/bg.jpg'
import { useNavigate } from 'react-router-dom';
import styles from './SearchResult.module.scss'

function SearchResult() {
    const navigate = useNavigate();
    const [value, setValue] = useState("")
    const movies = useSelector(state => state.filters);
    const getMovieById = "GET_MOVIE_BY_ID";
    const addToMyList = "ADD_TO_MY_LIST";
    let addToLikes = "ADD_TO_LIKES";
    let myWatchLaterList = [];
    let myLikes = [];

    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/original/${posterPath}`
    }
    return (
        <div className={styles.container} >
            {
                movies.map((movie) => {
                    const img = getPosterURL(movie["poster_path"]);
                    function getMovie(event) {
                        const element = movie;
                        store.dispatch({
                            type: getMovieById,
                            payload: element
                        })
                        navigate('/selectedMovie')
                    }

                    function addMovieToList(event) {
                        const element = movie;
                        if (myWatchLaterList.indexOf(element) !== -1) {
                            alert("Already Exsists")
                        } else {
                            myWatchLaterList.push(element)
                            store.dispatch({
                                type: addToMyList,
                                payload: myWatchLaterList
                            })
                        }
                    }

                    function addMovieToLikes(event) {
                        const element = movie;
                        if (myLikes.indexOf(element) > -1) {
                            alert("Already Exsists")
                        } else {
                            myLikes.push(element)
                            store.dispatch({
                                type: addToLikes,
                                payload: myLikes
                            })
                        }
                    }

                    return (
                        <div key={movie.id} className='card'
                            style={{ width: "280px", height: "450px", border: "2px solid #fff", margin: "10px 20px", backgroundColor: "#FFF", marginBottom: "150px", paddingBottom: "10px" }}>
                            <img
                                onClick={movie => getMovie(movie)}
                                src={img ? img : bg}
                                className="card-img-top" alt="..." style={{ width: "100%", height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{movie["first_air_date"]}</p>
                                <div className={styles.controls}>
                                    <button className="btn btn-primary" type="button" onClick={movie => addMovieToLikes(movie)}>Like</button>
                                    <button className="btn btn-primary" onClick={movie => addMovieToList(movie)}>Watch Later</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SearchResult;