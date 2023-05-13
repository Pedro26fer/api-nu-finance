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
   id?: string
   name?: string,
   email?: string,
   password?: string
 }