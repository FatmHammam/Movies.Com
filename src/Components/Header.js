import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import store from "../Store/reducer";
import { Nav, Navbar, Container } from "react-bootstrap";


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

            <Navbar expand="md" fixed="top">
                <Container >

                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Navbar.Brand href="/" style={{ padding: 0 }}>
                            <a className="header-brand" style={{ color: '#fff', cursor: "pointer" }} href="#">Movies.com</a>
                        </Navbar.Brand>

                        <ul className="header-nav">
                            <Nav style={{ padding: 0 }}>
                                <Nav.Link onClick={goHome} style={{ color: '#fff', cursor: "pointer" }}>Home</Nav.Link>

                                <Nav.Link onClick={goToFavourites} style={{ color: '#fff', cursor: "pointer" }}>Favorites</Nav.Link>

                                <Nav.Link onClick={goToMyList} style={{ color: '#fff', cursor: "pointer" }}>Watch Later</Nav.Link>
                            </Nav>
                        </ul>
                        <ul style={{ color: "transparent", marginTop: "5px" }}>
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    );
}

export default Header;