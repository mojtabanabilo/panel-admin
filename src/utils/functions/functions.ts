// functions Signup components
import React, { ChangeEvent } from "react";
import { ISignUpValidationErrors, ISignUpValidationInput } from "../types/interface";
import { toast } from 'react-toastify';

export const setInput : Function = (setter: Function) => (event: ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value)
}

export const handleInputChange: any = (e: ChangeEvent<HTMLInputElement>, setMessage: Function) => {
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

export const submitHandler = (error : object, navigate : Function) => {
    JSON.stringify(notify(error));
    setTimeout(() => {
        if(Object.keys(error).length === 0) navigate("/main", {replace: true});
    }, 2000);
}
// functions Signup components

// functions App component
export const setStateResize : any = (setData : Function) => {
    const handleResizeWindow : any = () => setData(window.innerWidth);
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => {
       window.removeEventListener("resize", handleResizeWindow);
    };
}
// functions App component

// functions inputs (Detect Text Direction)
export const detectTextDirection :  any = (str : string) => {
    if(str)
        if (/[A-Za-z]/.test(str)) return "ltr";
        else return "rtl";
    else return "rtl"
}
// functions inputs (Detect Text Direction)

// functions Navbar component
export const setStateSearchBar = (setData : Function, event : React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
}
// functions Navbar component