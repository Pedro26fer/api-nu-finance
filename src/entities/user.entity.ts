import {Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, Entity} from "typeorm"
import {v4 as uuid} from 'uuid'
import { Accounts } from "./accounts.entity";
import { Transactions } from "./transactions.entity";

@Entity()
export class User{

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;


    @Column({nullable: false})
    name: string;


    @Column({nullable: false, unique: true})
    email: string


    @Column({nullable: false})
    password: string;


    @CreateDateColumn({nullable: false})
    createdAt: Date


    @UpdateDateColumn({nullable: false})
    updatedAt: Date


    @OneToMany((type) => Accounts, account => account.user, {eager: true})
    accounts: Accounts[]


    @OneToMany(type => Transactions, transactions => transactions.user, {eager:true})
    transactions: Transactions[]




    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}