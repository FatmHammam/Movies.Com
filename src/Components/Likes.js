import styles from "./Likes.module.scss";
import { useSelector } from 'react-redux';
import bg from '../Images/bg.jpg'

const getPosterURL = (posterPath) => {
    return `https://www.themoviedb.org/t/p/original/${posterPath}`
}

function Likes() {
    const myLikes = useSelector(state => state.addToFavourites);
    console.log(myLikes[0]);
    let Like = myLikes[0] ? myLikes[0] : myLikes
    return (
        <div className={styles.container}>
            {
                Like.map((item, index) => {
                    const img = getPosterURL(item["poster_path"]);
                    return (
                        <div key={index} className="card"
                            style={{ width: "450px", height: "350px", border: "none", paddingBottom: "10px", margin: "10px" }}>
                            <img
                                src={img ? img : bg}
                                className="card-img-top" alt="..." style={{ width: "100%", height: "160px" }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: "14px", textAlign: 'center' }}>{item.name}</h5>
                                <p className="card-text" style={{ fontSize: "14px", textAlign: 'center' }}>{item["first_air_date"]}</p>
                                <p className="card-text"
                                    style={{ width: "90%", fontFamily: "Arial", textAlign: "center", margin: "auto", fontSize: "10px" }}
                                >{item.overview}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Likes;
