import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import store from "../Store/reducer";

function Header() {
    const users = useSelector(state => state.users);
    const loOut = "LOG_OUT";
    const navigate = useNavigate();

    const logout = () => {
        store.dispatch({
            type: loOut,
        })
        navigate('/')
    }

    const goToMyList = () => {
        navigate('/watchLater')
    }

    const goToFavourites = () => {
        navigate('/favourites')
    }

    const goHome = () => {
        navigate('/home')
    }

    return (
        <header className='header'
            style={{
                border: "none",
                backgroundColor: "transparent"
            }}>
            <a className="header-brand" style={{ color: '#fff', cursor: "pointer" }} href="#">Movies.com</a>
            <ul className="header-nav">
                <li className="nav-item active">
                    <a className='nav-link' style={{ color: '#fff', cursor: "pointer" }} onClick={goHome}>Home <span className="visually-hidden">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className='nav-link' style={{ color: '#fff', cursor: "pointer" }} onClick={goToFavourites}>Favorites</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link' style={{ color: '#fff', cursor: "pointer" }} onClick={goToMyList}>Watch Later</a>
                </li>
                <li className="nav-item dropdown">
                    <Dropdown as={ButtonGroup} styles={{ backgroundColor: "transparent" }}>

                        <Dropdown.Toggle
                            split variant="success"
                            style={{
                                backgroundColor: "transparent", border: 'none', color: "#fff", padding: "10px", margin: "0 10px"
                                , display: "flex", alignItems: "center", justifyContent: "space-around"
                                , width: "130px",
                                boxShadow: "none"
                            }}>
                            {users[0].name ? users[0].name : " "}
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ fontFamily: "Arial", textAlign: "center", backgroundColor: "transparent", border: 'none', color: "#fff" }}
                        >
                            <Dropdown.Item
                                onClick={logout}
                                style={{ fontFamily: "Arial", textAlign: "center", marginLeft: "25px", backgroundColor: "transparent", border: 'none', color: "#fff" }}
                            >Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </header >
    );
}

export default Header;