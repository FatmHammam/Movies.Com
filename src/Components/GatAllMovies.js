import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../Store/reducer";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalBody } from "reactstrap";
import styles from './GetAllMovies.module.scss'

function GetAllMovies() {
    const listMovies = useSelector(state => state.allMovies);
    let movieToEdit = useSelector(state => state.movieToEdit);
    const navigate = useNavigate();
    const Admin_remove = "ADMIN_REMOVE";
    const Admin_edit = "ADMIN_EDIT";
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState("");
    const [overview, setOverview] = useState("");
    const [first_air_date, setFirst_air_date] = useState("");
    const [poster, setPoster] = useState("");
    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/original/${posterPath}`
    }

    const deleteMovie = (movieToDelete) => {
        const filteredMovies = listMovies.filter((movie) => movie !== movieToDelete);

        store.dispatch({
            type: Admin_remove,
            payload: filteredMovies
        })
    }

    const editMovie = (movie) => {
        setShow(true);
        movieToEdit = movie;
        store.dispatch({
            type: Admin_edit,
            payload: movieToEdit
        })
    }

    const editModal = (movie) => {
        setName(name);
        setOverview(overview);
        setFirst_air_date(first_air_date);

        movieToEdit.name = name;
        movieToEdit.overview = overview;
        movieToEdit.first_air_date = first_air_date;
    }

    return (
        <div className={styles.container}>
            {listMovies.map((movie) => {
                const img = getPosterURL(movie["poster_path"]);

                return (
                    <div className='card'
                        key={movie.id}
                        style={{
                            width: "220px", height: "350px", border: "2px solid #000", backgroundColor: "#FFF",
                            margin: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <img src={img}
                            className="card-img-top" alt="..." style={{ width: "100%", height: "150px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie["first_air_date"]}</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button className="btn btn-info" style={{ margin: "10px" }} onClick={(e) => editMovie(movie)}>Edit </button>
                            <button className="btn btn-danger" onClick={(e) => deleteMovie(movie)}>Delete</button>
                        </div>
                        {/* -------------------------------- Modal ---------------------------- */}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Modal.Title>Edit Movie</Modal.Title>
                                <p style={{ marginTop: "20px" }}></p>
                            </Modal.Header>
                            <ModalBody>
                                <div className="card-body" >
                                    <div className="form-group" style={{ margin: "10px" }}>
                                        <label className="control-label">Movie Name</label>
                                        <input type="text" className="input-lg form-control" required
                                            // value={movieToEdit.name}
                                            // value={movie.name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group" style={{ margin: "10px" }}>
                                        <label>Description</label>
                                        <input type="text" className="input-lg form-control" required
                                            // value={movie.overview}
                                            onChange={(e) => setOverview(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group" style={{ margin: "10px" }}>
                                        <label>Year</label>
                                        <input type="text" className="input-lg form-control" required
                                            // value={movieToEdit["first_air_date"]}
                                            onChange={(e) => setFirst_air_date(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group" style={{ margin: "20px" }}>
                                        <label style={{ marginRight: "10px" }}>Image</label>
                                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpg"
                                            // value={movieToEdit.poster}
                                            onChange={(e) => setPoster(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <div className="form-group">
                                            <input value="Edit" type="button" className="btn btn-success btn-lg form-control"
                                                onClick={(e) => editModal(movie)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <Modal.Footer>
                                <Button variant="secondary"
                                    onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )
            })}
        </div>
    );
}

export default GetAllMovies;


// const editModal = ( movie) => {
//     console.log(movie);

//     const editedTaskList = listMovies.map((movie) => {
//         // if this task has the same ID as the edited task
//         if (id === movie.id) {
//             //
//             return { ...movie, name: newName }
//         }
//         console.log(name)
//         // console.log(newName)
//         return movie;
//     });
//     setName(name);
//     store.dispatch({
//         type: Admin_edit,
//         // payload: { name, overview, Year }
//     })
// }