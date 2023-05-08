import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { v4 as uuid} from 'uuid'
import { Transactions } from './transactions.entity';
import { User } from './user.entity';



@Entity()
export class Accounts{

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;


    @Column({nullable: false})
    name: string;


    @Column({nullable: false, unique: true})
    number: string


    @ManyToOne( type => User, user => user.accounts, {onDelete: "CASCADE"})
    user: User


    @OneToMany(() => Transactions, transaction => transaction.account, {eager:true})
    transactions: Transactions[]


    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}