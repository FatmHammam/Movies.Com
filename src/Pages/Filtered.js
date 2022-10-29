import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Movies from "../Components/Movies";
import Search from "../Components/Search";
import SearchResult from "../Components/SearchResults";
import styles from "./Home.module.scss"


function Filtered() {

    return (
        <div className={styles.container}>
            <Header />
            <SearchResult />
            <Footer />
        </div>
    );
}

export default Filtered;