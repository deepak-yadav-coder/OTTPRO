import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AuthPage = ({ setIsLoggedIn, setUserData }) => {

    const navigateDefault = useNavigate();
    const userObject = {
        name: "",
        mobile: "",
        // email:""
    }

    const Formik = useFormik({
        initialValues: userObject,
        onSubmit: (values) => {
            localStorage.setItem('isLoggedIn', true);
            setIsLoggedIn(true);
            setUserData(values);
            navigateDefault("/", { replace: true });
            // const apiResponse = axios.post('http://localhost:5000/signup', values)
            // console.log(apiResponse)
            handleReset();
        }

    })
    const { values, errors, handleChange, handleSubmit, handleReset } = Formik;

    let localData = localStorage.getItem('users') || '[]';
    localData = JSON.parse(localData);

    function handleValidation() {
        let isExist = false;

        for (let prop of localData) {
            if (prop.mobile == values.mobile && prop && values.mobile) {
                isExist = true;
                break;
            }
        }
        if (!isExist && values.mobile) {
            localData = [...localData, values];
            localStorage.setItem('users', JSON.stringify(localData))
            alert('you are first time log in. click ok to continue.')
        }
    }

    return (
        <div style={styles.container}>
            <form action="" onSubmit={handleSubmit} style={styles.form} >
                {
                    Object.keys(userObject).map((key) => (
                        <ul key={key}>
                            <label htmlFor={key} style={styles.label}> {key}
                                <input type={key == 'mobile' ? 'tel' : 'text'}
                                    name={key}
                                    onChange={handleChange}
                                    value={values[key]}
                                    required
                                    pattern={key == 'mobile' ? "[6-9]{1}[0-9]{9}" : undefined}
                                    style={styles.input}
                                    maxLength={key == 'mobile' ? 10 : 20}
                                    minLength={key == 'mobile' ? 10 : 3}
                                />
                            </label>
                        </ul>
                    ))
                }
                <button type="submit" style={styles.button} onClick={handleValidation}>Log In</button>
            </form>
        </div >
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#e3dddd",
        width: '100%',
        position: 'fixed',
    },
    form: {
        display: 'block',
        color: 'black',
        background: 'white',
        borderRadius: "5px",
        padding: "5px",
        margin: '20px 20px 100px 20px',
        width: window.screen.width < 500 ? '90%' : 'auto'
    },
    label: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        fontWeight: "60px",
        color: "#050101",
        margin: window.screen.width > 500 ? '15px 60px' : 'auto',
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif"

    },
    input: {
        padding: "6px",
        borderRadius: "6px",
        width: "230px",
        border: "1px solid #ddd6d6",
        fontSize: "15px",
        outline: "none",
        background: 'none',
        color: 'black',
        margin: '5px 20px',
        alignItems: "center "
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        padding: "10px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#1224ca",
        color: "#ffffff",
        fontSize: "15px",
        cursor: "pointer",
    }

};

export default AuthPage;