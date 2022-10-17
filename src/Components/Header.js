import { useNavigate } from 'react-router-dom';


function Header({ backgroundColor }) {
    const background = "../Images/backg.png"
    const navigate = useNavigate();
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
            <a className="header-brand" style={{ color: '#fff' }} href="#">Movies.com</a>
            <ul className="header-nav">
                <li className="nav-item active">
                    <a className='nav-link' style={{ color: '#fff' }} href="#" onClick={goHome}>Home <span className="visually-hidden">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className='nav-link' style={{ color: '#fff' }} href="#" onClick={goToFavourites}>Favorites</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link' style={{ color: '#fff' }} href="#" onClick={goToMyList}>Watch Later</a>
                </li>
                <li className="nav-item dropdown">
                    <a className='nav-link dropdown-toggle' style={{ color: '#fff' }} href="#" id="headerDropdownMenuLink" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
                        User
                    </a>
                    <div className='dropdown-menu' style={{ color: '#fff' }} aria-labelledby="headerDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </header >
    );
}

export default Header;