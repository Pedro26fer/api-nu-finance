export interface IUserSignUp {
    name: string,
    email: string,
    password: string
}
 export interface IUserSignIn {
    email: string,
    password: string
 }

 export interface IUserUpdated {
    name?: string,
    email?: string,
    password?: string
 }