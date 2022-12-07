import store from '../Store/reducer';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import bg from '../Images/bg.jpg'
import { useNavigate } from 'react-router-dom';
import styles from './SearchResult.module.scss'

function SearchResult() {
    const navigate = useNavigate();
    const movies = useSelector(state => state.filters);
    const getMovieById = "GET_MOVIE_BY_ID";

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
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SearchResult;