import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import { v4 as uuid} from 'uuid'
import { Accounts } from "./accounts.entity";
import { User } from "./user.entity";


@Entity()
export class Transactions{


    @PrimaryGeneratedColumn('uuid')
    readonly id: string;


    @Column("text",{nullable: false})
    description: string;


    @Column({nullable: false})
    type: string;


    @Column({nullable: false})
    value: number


    @ManyToOne(type => Accounts, account => account.transactions, {onDelete: "CASCADE"})
    account: Accounts

    @ManyToOne(type => User, user => user.transactions, {onDelete: "CASCADE"})
    user: User



    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}