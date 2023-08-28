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