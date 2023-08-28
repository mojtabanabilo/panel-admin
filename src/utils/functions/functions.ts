import { ISignUpValidationErrors, ISignUpValidationInput } from "../types/interface";
import { toast } from 'react-toastify';

export const setInput : Function = (setter: Function) => (event: any) => {
    setter(event.target.value)
}

export const handleInputChange: any = (e: any, message: string, setMessage: Function) => {
    const { name, value } = e.target;
    setMessage((prevMessage : any) => ({
      ...prevMessage,
      [`${name}`]: value,
    }));
};

export const signUpValidation : any = (data : ISignUpValidationInput) => {

    const nameRegex = /^[\u0000-\uFFFF -]+$/;
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const objError : ISignUpValidationErrors = {}

    if(!data.name){
        objError.nameError = "نام خود را وارد کنید";
    } else if(!nameRegex.test(data.name)){
        objError.nameError = "نام معتبر نیست";
    } else {
        delete objError.nameError;
    }

    if(!data.email?.trim()){
        objError.emailError = "ایمیل را وارد کنید";
    } else if(!emailRegex.test(data.email)){
        objError.emailError = "ایمیل معتبر نیست";
    } else {
        delete objError.emailError;
    }

    if(!data.password){
        objError.passwordError = "رمز عبور را وارد کنید";
    } else if(data.password.length < 6){
        objError.passwordError = "رمز عبور > 6";
    } else {
        delete objError.passwordError;
    }

    return objError;
}

export const notify = (message: object) => {
    if(Object.keys(message).length === 0) toast("ثبت نام با موفقیت انجام شد");
    else if(Object.keys(message).length > 0) toast(`${Object.values(message).join(' - ')}`);
};