export interface IScreenProps {
    userScreen: number | null,
}

export interface ISignUpValidationErrors {
    nameError?: string | null | undefined,
    emailError?: string | null | undefined,
    passwordError?: string | null | undefined 
}

export interface ISignUpValidationInput {
    name?: string | null | undefined,
    email?: string | null | undefined,
    password?: string | null | undefined 
}

export interface ICreateProduct {
    name: string,
    count: string,
    price: string
}

export interface ICurrentItem {
    name?: string,
    count?: string,
    price?: string
}

export interface ICreateProductValidation {
    name: string | null,
    count: string | null,
    price: string | null
}

export interface IModalCreateItemError {
    nameField?: string | null,
    countField?: string | null,
    priceField?: string | null
}

export interface ITouchProperties {
    nameTouch: boolean,
    countTouch: boolean,
    priceTouch: boolean
}

