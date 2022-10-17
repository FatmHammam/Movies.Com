import styles from "../Components/Login_SignUp.module.scss";

function Login_SignUp(props) {

    const passeTrueORFalse = () => {
        props.onClick(!props.flag);
        console.log()
    }

    return (
        <div className={styles.container}
            style={{
                flexDirection: props.flexDirection
            }}
        >
            <div className={styles.Info}>
                <h1>{props.title}</h1>
                <form>
                    <label>Email</label>
                    <input type="text" />
                    {props.flag ? "" : <label>Username</label>}
                    {props.flag ? "" : <input type="text" />}
                    <label>Password</label>
                    <input type="password" />
                </form>
                <button>{props.button}</button>
                {props.continueWithGoogle}
            </div>
            <div className={styles.Guidness}>
                <div>
                    <h1>{props.GiudOne}</h1>
                    <p>{props.GiudTwo}</p>
                </div>
                <button onClick={passeTrueORFalse}>{props.flippedButton}</button>
            </div>
        </div>
    );
}

export default Login_SignUp;
