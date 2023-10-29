import { ChangeEvent } from "react";
import { ISignUpValidationErrors, ISignUpValidationInput, IModalCreateItemError, ICreateProduct, ICurrentItem} from "../types/interface";
import { toast } from 'react-toastify';

// functions Signup components

export const setInput : Function = (setter: Function) => (event: ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
}

export const handleInputChange : Function = (e: ChangeEvent<HTMLInputElement>, setMessage: Function) : any => {
    const { name, value } = e.target;
    setMessage((prevMessage : any) => ({
      ...prevMessage,
      [`${name}`]: value,
    }));
};

export const signUpValidation : Function = (data : ISignUpValidationInput) : any => {

    const nameRegex : RegExp = /^[\u0000-\uFFFF -]+$/;
    const emailRegex : RegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const objError : ISignUpValidationErrors = {};

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

export const notify : Function = (message: object) : any => {
    if(Object.keys(message).length === 0) toast("ثبت نام با موفقیت انجام شد");
    else if(Object.keys(message).length > 0) toast(`${Object.values(message).join(' - ')}`);
};

export const submitHandler : Function = (error : object, navigate : Function) : any => {
    JSON.stringify(notify(error));
    setTimeout(() => {
        if(Object.keys(error).length === 0) navigate("/main", {replace: true});
    }, 2000);
}
// functions Signup components

// functions App component
export const setStateResize : Function = (setData : Function) : any => {
    const handleResizeWindow : any = () => setData(window.innerWidth);
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => {
       window.removeEventListener("resize", handleResizeWindow);
    };
}
// functions App component

// functions inputs (Detect Text Direction)
export const detectTextDirection : Function = (str : string | undefined) : any => {
    if(str)
        if (/[A-Za-z]/.test(str)) return "ltr";
        else return "rtl";
    else return "rtl";
}
// functions inputs (Detect Text Direction)

// functions Navbar component
export const setStateSearchBar : Function = (setData : Function, event : ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
}
// functions Navbar component

// functions Sidebar component
export const handleMouseEvent : Function = (setState : any, state : boolean) : Function => setState(!state);
// functions Sidebar component

// functions ModalCreateItem component
export const modalCreateItemValidation : Function = (data : ICurrentItem | null) : IModalCreateItemError => {
    const objError : IModalCreateItemError | null = {};
    const countRegex : RegExp = /^\d+$/;
    const priceRegex : RegExp = /^\d+$/;

    if(!data?.name){
        objError.nameField = "لطفا مقداری را وارد کنید.";
    } else {
        delete objError.nameField;
    }

    if(!data?.count){
        objError.countField = "لطفا مقداری را وارد کنید.";
    } else if(!countRegex.test(data.count)){
        objError.countField = "از اعداد استفاده کنید.";
    } else {
        delete objError.countField;
    }

    if(!data?.price){
        objError.priceField = "لطفا مقداری را وارد کنید.";
    } else if(!priceRegex.test(data.price)){
        objError.priceField = "از اعداد استفاده کنید.";
    } else {
        delete objError.priceField;
    }

    return objError;
}
// functions ModalCreateItem component

// functions ModalٍEditItem component
export const duplicateNotifyError : Function = () : any => {
    toast.error("اطلاعات معتبر نیست !", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
    });
}
// functions ModalٍEditItem component

// functions Table component
export const deleteItem : Function= (index : number, ary : Array<ICreateProduct>, setter : Function) : any => {
    const currentItem : Array<ICreateProduct> = ary.filter((_, ind) => ind !== index);
    setter([...currentItem]);
}

export const hasDuplicates : Function = (arr : Array<ICreateProduct>) : boolean | undefined => {
    const uniqueItems = new Set();
    let isDuplicated : boolean = false;
    for(const item of arr){
        if(uniqueItems.has(item.name)){
            isDuplicated = true;
            break;
        }
        uniqueItems.add(item.name);   
    }
    return isDuplicated;
}

export const duplicateNotifyWarning : Function = () : any => {
    toast.warn("محصول تکراری وجود دارد.", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}
// functions Table component