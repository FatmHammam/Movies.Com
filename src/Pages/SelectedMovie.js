import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SingleMovie from "../Components/SingleMovie";
import backg from '../Images/backg.png';



function selectedMovie() {

    return (
        <div style={{
            backgroundImage: `url(${backg})`, width: "100%",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Header />
            <SingleMovie />
            <Footer />
        </div>
    );
}

export default selectedMovie;