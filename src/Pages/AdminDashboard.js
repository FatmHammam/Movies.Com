import styles from "./AdminDashboard.module.scss"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import GetAllMovies from "../Components/GatAllMovies";
import AddMovie from "../Components/AddMovie";
import store from "../Store/reducer";

function AdminDashboard() {
    const [flag, setFlag] = useState(0);
    const users = useSelector(state => state.users);
    const loOut = "LOG_OUT";
    const navigate = useNavigate();

    const getAllMovies = () => {
        setFlag(1);
    }
    const addMovie = () => {
        setFlag(2);
    }

    const logout = () => {
        store.dispatch({
            type: loOut,
        })
        navigate('/')
    }
    return (
        <div className={styles.container}>
            <div className={styles.adminControls}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <h1>Admin {users[0].name ? users[0].name : " "}</h1>
                </div>
                <div style={{ backgroundColor: "transparent", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <hr />
                    <button onClick={getAllMovies} style={{ backgroundColor: "transparent" }}>All Movies</button>
                    <hr />
                    <button onClick={addMovie} style={{ backgroundColor: "transparent" }}>Add Movie</button>
                    <hr />
                </div>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <button className="btn btn-secondary" onClick={logout}>Logout</button>
                </div>
            </div>
            {
                flag === 1 ? <GetAllMovies /> : ""
            }
            {
                flag === 2 ? <AddMovie /> : ""
            }
        </div>
    );
}

export default AdminDashboard;