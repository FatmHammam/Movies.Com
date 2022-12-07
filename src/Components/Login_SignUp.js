import { useState } from "react";
import styles from "../Components/Login_SignUp.module.scss";
import { useDispatch, useSelector } from "react-redux";
import store from "../Store/reducer";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Login_SignUp(props) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [validationFlag, setValidationFlag] = useState(false);
    const [validationEmail, setValidationEmail] = useState(false);
    const [validationPassword, setValidationPassword] = useState(false);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signUp = "REGISTER";
    const login = "LOGIN";
    const users = useSelector(state => state.users);
    const user = users.find(user => user.name === name && user.password === password);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const passeTrueORFalse = () => {
        props.onClick(!props.flag);
    }

    const registerAndLogin = () => {
        if (!props.flag) {
            if (!email || !name || !password) {
                setValidationFlag(true)
            } else if (!email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
                console.log("dosn't match")
                setValidationEmail(true);
            } else if (password.length < 3 || password.length > 8) {
                setValidationPassword(true);
            }
            else {
                setValidationPassword(false);
                store.dispatch({
                    type: signUp,
                    payload: {
                        email,
                        name,
                        password
                    }
                })
                handleShow();
            }

        } else {
            if (user) {
                if (user.email === "admin@movies.com" && user.password === "123456") {
                    navigate('/admin');
                } else {
                    dispatch({
                        type: login,
                        user
                    })
                    navigate('/home')
                }
            } else {
                alert("Wrong credential");
            }
        }
    }

    return (
        <div className={`${styles.container} ${props.flag ? styles.row : styles.colom}`}
        >
            <div className={styles.Info}>
                <h1>{props.title}</h1>
                <form>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {validationEmail ? <p style={{ color: "red" }}>Invalid Email</p> : ""}
                    {props.flag ? "" : <label>First Name</label>}
                    {props.flag ? "" : <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                        required
                    />}
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {validationPassword ? <p style={{ color: "red" }}>Password should not be less than 3 characters or more than 8 characters</p> : ""}
                </form>
                {validationFlag ? <p style={{ color: "red", fontFamily: "Arial", margin: 0 }}>Please Fill All Requied Fields</p> : ""}
                <button onClick={registerAndLogin}>{props.button}</button>
            </div>
            <div className={styles.Guidness}>
                <div>
                    <h1>{props.GiudOne}</h1>
                    <p>{props.GiudTwo}</p>
                </div>
                <button onClick={passeTrueORFalse}>{props.flippedButton}</button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Modal.Title >Registered Successfully</Modal.Title>
                    <p style={{ marginTop: "20px" }}><FontAwesomeIcon icon={faCircleCheck} color="#0f0" size='4x' /></p>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login_SignUp;
