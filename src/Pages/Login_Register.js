import { useState } from "react";
import Login_SignUp from "../Components/Login_SignUp";
import styles from "../Pages/Login_Register.module.scss";

function Login_Register() {
    let [flag, setFlag] = useState(true)
    const ParentFunction = (value) => {
        setFlag(value);
    }

    return (
        <div className={styles.container}>

            <Login_SignUp
                title={flag ? "Welcome Back !" : "Time to feel like home,"}
                button={flag ? "Login" : "Sign Up"}
                GiudOne={flag ? "New here?" : "One of us?"}
                GiudTwo={flag ? "Sign up and discover a great amount of new opportunities"
                    : "If you already have an account. Just sign in. we've missed you."}
                flippedButton={flag ? "Sign Up" : "Login"}
                flexDirection={flag ? "row" : "row-reverse"}
                onClick={ParentFunction}
                flag={flag}
            />
        </div>
    );
}

export default Login_Register;
