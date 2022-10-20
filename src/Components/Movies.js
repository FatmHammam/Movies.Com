import { useSelector } from 'react-redux';
import styles from "./Movies.module.scss";
import bg from '../Images/bg.jpg'
import { useNavigate } from 'react-router-dom';
import store from '../Store/reducer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const getPosterURL = (posterPath) => {
    return `https://www.themoviedb.org/t/p/original/${posterPath}`
}

function Movies({ Statment }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const listMovies = useSelector(state => state.allMovies);
    const getMovieById = "GET_MOVIE_BY_ID";
    const addToMyList = "ADD_TO_MY_LIST";
    let addToLikes = "ADD_TO_LIKES";
    let myWatchLaterList = [];
    let myLikes = [];
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            // handleShow();
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
                            // handleShow();
                        }
                    }
                    // setModalShow(true)
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
                                    <button className="btn btn-primary" type="button" onClick={movie => addMovieToLikes(movie)}>Like</button>
                                    <button className="btn btn-primary" onClick={movie => addMovieToList(movie)}>Watch Later</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {/* ---------------- Modal --------------------- () => setModalShow(true)*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Modal.Title >Registered Successfully</Modal.Title>
                    <p style={{ marginTop: "20px" }}><FontAwesomeIcon icon={faCircleCheck} color="#0f0" size='4x' /></p>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* ------------------- END----------------------- */}
        </div>
    );
}

export default Movies;
