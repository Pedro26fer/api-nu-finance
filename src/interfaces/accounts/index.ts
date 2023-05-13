export interface IAccountRegister {
  name: string;
  number: string;
  userEmail: string;
}

export interface IAccountUpdate {
  id?: string,
  name?: string
  number?: string
}
