import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MyList from "../Components/MyList";
import styles from "./Home.module.scss"


function WatchLater() {

    return (
        <div className={styles.container}>
            <Header />
            <MyList />
            <Footer />
        </div>
    );
}

export default WatchLater;