import styles from "./SingleMovie.module.scss";
import { useSelector } from 'react-redux';
import bg from '../Images/bg.jpg'

const getPosterURL = (posterPath) => {
    return `https://www.themoviedb.org/t/p/original/${posterPath}`
}

function SingleMovie() {
    const selectedMovie = useSelector(state => state.selectedMovie);
    const img = getPosterURL(selectedMovie["poster_path"]);

    return (
        <div className={styles.container}>
            <div key={selectedMovie.id} className='card'
                style={{ width: "750px", height: "535px", border: "none", marginBottom: "150px", paddingBottom: "10px" }}>
                <img
                    src={img ? img : bg}
                    className="card-img-top" alt="..." style={{ width: "100%", height: "300px" }} />
                <div className="card-body">
                    <h5 className="card-title">{selectedMovie.name}</h5>
                    <p className="card-text">{selectedMovie["first_air_date"]}</p>
                    <p className="card-text"
                        style={{ width: "90%", fontFamily: "Arial", textAlign: "center", margin: "auto", fontSize: "12px" }}
                    >{selectedMovie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleMovie;
