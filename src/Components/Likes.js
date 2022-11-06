import styles from "./Likes.module.scss";
import { useSelector } from 'react-redux';
import bg from '../Images/bg.jpg'
import store from "../Store/reducer";


const getPosterURL = (posterPath) => {
    return `https://www.themoviedb.org/t/p/original/${posterPath}`
}

function Likes() {
    const myLikes = useSelector(state => state.addToFavourites);
    console.log(myLikes)
    let Like = myLikes[0] ? myLikes[0] : myLikes
    const removeIndividualLike = "REMOVE_INDIVIDUAL_LIKE";
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

    const removeMovieFromList = (movieToRemove) => {
        let newArr = Like.filter((movie) => movie !== movieToRemove);

        store.dispatch({
            type: removeIndividualLike,
            payload: newArr
        })
    }

    return (
        <div className={styles.container}>
            {
                Like.map((item, index) => {
                    const img = getPosterURL(item["poster_path"]);
                    return (
                        <div key={index} className="card"
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", width: "280px", height: "455px", border: "2px solid #fff", margin: "10px 20px", backgroundColor: "#FFF", marginBottom: "50px" }}>
                            <img
                                src={img ? img : bg}
                                className="card-img-top" alt="..." style={{ width: "100%", height: "150px", marginTop: "5px" }} />
                            <div className="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
                                <h5 className="card-title" style={{ fontSize: "14px", textAlign: 'center' }}>{item.name}</h5>
                                <p className="card-text" style={{ fontSize: "14px", textAlign: 'center' }}>{item["first_air_date"]}</p>
                                <p className="card-text"
                                    style={{ width: "90%", fontFamily: "Arial", textAlign: "center", margin: "auto", fontSize: "10px" }}
                                >{item.overview ? item.overview : text}</p>
                                <button className="btn btn-primary" type="button"
                                    style={{ margin: "15px 80px 5px 80px", backgroundColor: "#5C00A3" }}
                                    onClick={(e) => {
                                        removeMovieFromList(item)
                                    }}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Likes;
