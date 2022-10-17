import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SingleMovie from "../Components/SingleMovie";
import styles from "./Home.module.scss"


function selectedMovie() {

    return (
        <div className={styles.container}>
            <Header />
            <SingleMovie />
            <Footer />
        </div>
    );
}

export default selectedMovie;