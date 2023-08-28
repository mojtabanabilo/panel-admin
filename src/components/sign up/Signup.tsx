import {FC, useState, useEffect} from 'react';
import { setInput, signUpValidation, handleInputChange, notify } from '../../utils/functions/functions';
import { IScreenProps, ISignUpValidationInput } from '../../utils/types/interface';
import { TMessage } from '../../utils/types/type';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.scss";

const Signup : FC<IScreenProps> = ({userScreen}) => {    
    // states
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<TMessage>({
        name: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState<object>({});
    console.log(error);
    console.log(message);
    
    // lifecycle
    useEffect(() => {
        setError(signUpValidation(message))
    }, [message])

    // direction handler
    const nameDirection = message.name && /[A-Za-z]/.test(message.name) ? 'ltr' : 'rtl';
    const emailDirection = message.email && /[A-Za-z]/.test(message.email) ? 'ltr' : 'rtl';
    const passwordDirection = message.password && /[A-Za-z]/.test(message.password) ? 'ltr' : 'rtl';
    
    return (
        <div className='form'>
            <div className="container">
                <h2>ثبت نام</h2>
                <form>
                    <div className="form-group">
                        <input style={{ direction: nameDirection }}
                            name="name"
                            value={message.name}
                            type="text"
                            onChange={(e) => handleInputChange(e, message, setMessage)}
                            placeholder="نام"
                        />
                    </div>
                    <div className="form-group">
                        <input style={{ direction: emailDirection }}
                            name="email"
                            value={message.email}
                            type="email"
                            onChange={(e) => handleInputChange(e, message, setMessage)}
                            placeholder="ایمیل"
                        />
                    </div>
                    <div className="form-group">
                        <input style={{ direction: passwordDirection }}
                            name="password"
                            value={message.password}
                            type="password"
                            onChange={(e) => handleInputChange(e, message, setMessage)}
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