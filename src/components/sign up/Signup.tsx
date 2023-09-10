import {FC, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpValidation, handleInputChange, detectTextDirection, submitHandler } from '../../utils/functions/functions';
import { useMyContext } from '../../context/context';
import { TMessage } from '../../utils/types/type';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./signup.module.scss";

const Signup : FC = () => {    
    // states
    const [error, setError] = useState<object>({});
    const [message, setMessage] = useState<TMessage>({
        name: "",
        email: "",
        password: ""
    })

    // context
    const {userWidth} = useMyContext();

    // navigator
    const navigate = useNavigate();
    
    // lifecycle
    useEffect(() => {
        setError(signUpValidation(message))
    }, [message])
    
    return (
        <div className={styles.form}>
            <div className={styles.container}>
                <form className={styles.form_container}>
                    <h2>ثبت نام</h2>
                    <div className={styles.form_group}>
                        <input style={{ direction: detectTextDirection(message.name) }}
                            name="name"
                            value={message.name}
                            type="text"
                            onChange={(e) => handleInputChange(e,  setMessage)}
                            placeholder="نام"
                        />
                    </div>
                    <div className={styles.form_group}>
                        <input style={{ direction: detectTextDirection(message.email) }}
                            name="email"
                            value={message.email}
                            type="email"
                            onChange={(e) => handleInputChange(e,  setMessage)}
                            placeholder="ایمیل"
                        />
                    </div>
                    <div className={styles.form_group}>
                        <input style={{ direction: detectTextDirection(message.password) }}
                            name="password"
                            value={message.password}
                            type="password"
                            onChange={(e) => handleInputChange(e,  setMessage)}
                            placeholder="رمز عبور"
                        />
                    </div>
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        submitHandler(error, navigate);
                    }}>ثبت نام</button>
                </form>
                {userWidth && userWidth >= 795 && (
                    <div className={styles.image_form}>
                        <img
                            src={require("../../assets/image/Revenue-cuate.svg").default}
                            alt="illustrator key"
                        />
                    </div>
                )}
            </div>
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </div>
    );
};

export default Signup;