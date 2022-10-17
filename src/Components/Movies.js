import { useSelector } from 'react-redux';
import styles from "./Movies.module.scss";
import bg from '../Images/bg.jpg'
import { useNavigate } from 'react-router-dom';
import store from '../Store/reducer';

const getPosterURL = (posterPath) => {
    return `https://www.themoviedb.org/t/p/original/${posterPath}`
}

function Movies() {
    const navigate = useNavigate();
    const listMovies = useSelector(state => state.allMovies);
    const getMovieById = "GET_MOVIE_BY_ID";
    const addToMyList = "ADD_TO_MY_LIST";
    let addToLikes = "ADD_TO_LIKES";
    let myWatchLaterList = [];
    let myLikes = [];

    return (
        <div className={styles.container} >
            {
                listMovies.map((movie) => {
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
                            alert("ALREADY Exsist");
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
                            style={{ width: "750px", height: "535px", border: "none", marginBottom: "150px", paddingBottom: "10px" }}>
                            <img
                                onClick={movie => getMovie(movie)}
                                src={img ? img : bg}
                                className="card-img-top" alt="..." style={{ width: "100%", height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{movie["first_air_date"]}</p>
                                <p className="card-text"
                                    style={{ width: "90%", fontFamily: "Arial", textAlign: "center", margin: "auto", fontSize: "12px" }}
                                >{movie.overview}</p>
                                <div className={styles.controls}>
                                    <button className="btn btn-primary" onClick={movie => addMovieToLikes(movie)}>Like</button>
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

export default Movies;
