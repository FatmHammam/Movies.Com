import { useState } from "react";
import store from '../Store/reducer';
import styles from "./AddMovie.module.scss"

function AddMovie({ movie }) {
    const [name, setName] = useState("");
    const [overview, setOverview] = useState("");
    const [first_air_date, setFirst_air_date] = useState("");
    const [poster, setPoster] = useState("");
    const add = "ADD_MOVIE";

    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/original/${posterPath}`
    }

    const addToList = () => {
        console.log(name, overview, first_air_date, poster);
        const img = getPosterURL(poster);

        store.dispatch({
            type: add,
            payload: { name, overview, first_air_date, img }
        })
    }

    return (
        <div className={styles.container}>
            <div className="padding"  >
                <div className="row" >
                    <div className="container-fluid d-flex justify-content-center" >
                        <div className="col-sm-8 col-md-6">
                            <div className={styles.card}>
                                <div className="card-header" >
                                    <p
                                        style={{ textAlign: "center", color: "#333", fontFamily: "arial", fontSize: "18px", fontWeight: "600", marginTop: "5px" }}
                                    >Add Movie</p>
                                </div>
                                <div className="card-body" >
                                    <div className="form-group" style={{ margin: "10px" }}>
                                        <label className="control-label">Movie Name</label>
                                        <input type="text" className="input-lg form-control" required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group" style={{ margin: "10px" }}>
                                        <label>Description</label>
                                        <input type="text" className="input-lg form-control" required
                                            value={overview}
                                            onChange={(e) => setOverview(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group" style={{ margin: "10px" }}>
                                        <label>Year</label>
                                        <input type="text" className="input-lg form-control" required
                                            value={first_air_date}
                                            onChange={(e) => setFirst_air_date(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group" style={{ margin: "20px" }}>
                                        <label style={{ marginRight: "10px" }}>Image</label>
                                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpg"
                                            value={poster}
                                            onChange={(e) => setPoster(e.target.value)}
                                        />
                                    </div>
                                    <div >
                                        <div className="form-group">
                                            <input value="Add" type="button" className="btn btn-success btn-lg form-control"
                                                onClick={addToList}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;