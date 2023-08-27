import React, {FC, useState} from 'react';
import { setInput } from '../../utils/functions/functions';
import { IScreenProps } from '../../utils/types/interface';
import "./signup.scss";

const Signup : FC<IScreenProps> = ({userScreen}) => {
    console.log(userScreen);
    

    // states
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // direction handler
    const nameDirection = name && /[A-Za-z]/.test(name) ? 'ltr' : 'rtl';
    const emailDirection = email && /[A-Za-z]/.test(email) ? 'ltr' : 'rtl';
    const passwordDirection = password && /[A-Za-z]/.test(password) ? 'ltr' : 'rtl';
    
    return (
        <div className='form'>
            <div className="container">
                <h2>ثبت نام</h2>
                <form>
                    <div className="form-group">
                        <input style={{ direction: nameDirection }} value={name} type="text" name="name" onChange={setInput(setName)} required placeholder="نام"/>
                    </div>
                    <div className="form-group">
                        <input style={{ direction: emailDirection }} value={email} type="email" name="email" onChange={setInput(setEmail)} required placeholder="ایمیل"/>
                    </div>
                    <div className="form-group">
                        <input style={{ direction: passwordDirection }} value={password} type="password" name="password" onChange={setInput(setPassword)} required placeholder="رمز عبور"/>
                    </div>
                    <button type="submit">ثبت نام</button>
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
        </div>
    );
};

export default Signup;