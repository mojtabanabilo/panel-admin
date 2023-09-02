import {FC, useState, useEffect} from 'react';
import { signUpValidation, handleInputChange, notify, detectTextDirection } from '../../utils/functions/functions';
import { IScreenProps } from '../../utils/types/interface';
import { TMessage } from '../../utils/types/type';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.scss";

const Signup : FC<IScreenProps> = ({userScreen}) => {    
    // states
    const [error, setError] = useState<object>({});
    const [message, setMessage] = useState<TMessage>({
        name: "",
        email: "",
        password: ""
    })
    
    // lifecycle
    useEffect(() => {
        setError(signUpValidation(message))
    }, [message])
    
    return (
        <div className='form'>
            <div className="container">
                <h2>ثبت نام</h2>
                <form>
                    <div className="form-group">
                        <input style={{ direction: detectTextDirection(message.name) }}
                            name="name"
                            value={message.name}
                            type="text"
                            onChange={(e) => handleInputChange(e,  setMessage)}
                            placeholder="نام"
                        />
                    </div>
                    <div className="form-group">
                        <input style={{ direction: detectTextDirection(message.email) }}
                            name="email"
                            value={message.email}
                            type="email"
                            onChange={(e) => handleInputChange(e,  setMessage)}
                            placeholder="ایمیل"
                        />
                    </div>
                    <div className="form-group">
                        <input style={{ direction: detectTextDirection(message.password) }}
                            name="password"
                            value={message.password}
                            type="password"
                            onChange={(e) => handleInputChange(e,  setMessage)}
                            placeholder="رمز عبور"
                        />
                    </div>
                    <button type="submit" onClick={(e) => {
                        e.preventDefault()
                        return JSON.stringify(notify(error))
                    }}>ثبت نام</button>
                </form>
            </div>
            {userScreen && userScreen >= 795 && (
                <div className='image-form'>
                    <img
                        src={require("../../assets/image/Revenue-cuate.svg").default}
                        alt="illustrator key"
                    />
                </div>
            )}
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