import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Likes from "../Components/Likes";
import styles from "./Home.module.scss"

function Favourites() {

    return (
        <div className={styles.container}>
            <Header />
            <Likes />
            <Footer />
        </div>
    );
}

export default Favourites;