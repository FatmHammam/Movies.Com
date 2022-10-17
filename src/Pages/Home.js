import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Movies from "../Components/Movies";
import styles from "./Home.module.scss"


function Home() {

    return (
        <div className={styles.container}>
            <Header />
            <Movies />
            <Footer />
        </div>
    );
}

export default Home;