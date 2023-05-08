import { Accounts } from "../../entities/accounts.entity";

export interface IAddTransactin {
    description: string;
    type: string;
    value: number;
    account: string;
    userEmail: string
}