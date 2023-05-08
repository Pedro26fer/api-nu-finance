import { DataSource } from "typeorm";
require("dotenv").config();
import { User } from "./entities/user.entity";
import { Accounts } from "./entities/accounts.entity";
import { Transactions } from "./entities/transactions.entity";
import {lastMigration1683175055979} from "./migrations/1683175055979-lastMigration"






const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",    
  username: process.env.POSTGREE_USER,
  password: process.env.POSTGREE_PASSWORD,
  database: process.env.POSTGREE_DATABASE,

  synchronize: false,
  logging: true,

  entities: [User, Accounts, Transactions],
  migrations: [lastMigration1683175055979]
  
});


export default AppDataSource;
