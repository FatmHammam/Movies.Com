import TextField from '@mui/material/TextField';
import store from '../Store/reducer';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import styles from "./Search.module.scss"
import { useNavigate } from 'react-router-dom';


function Search() {
    const [value, setValue] = useState("")
    const filtered = 'EDIT_TEXT_FILTER'
    const movies = useSelector(state => state.allMovies);
    const navigate = useNavigate();


    const handleSearch = () => {
        let text = value
        const filteredMovie = movies.filter((movie) => {
            let textMatch = movie.name.toLowerCase().includes(text.toLowerCase());
            return textMatch
        });
        store.dispatch({
            type: filtered,
            payload: filteredMovie ? [...filteredMovie] : []
        })

        navigate('/filtered');
    }

    return (
        <div className={styles.container} >
            <TextField id="filled-basic"
                label="Quick search"
                variant="filled"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ backgroundColor: "#fff", width: "600px" }}
            />
            <button style={{ backgroundColor: "#fff", border: "none", padding: "16px 10px", opacity: "0.89" }} onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} color="#000" size='xl' />
            </button>
        </div>
    );
}

export default Search;