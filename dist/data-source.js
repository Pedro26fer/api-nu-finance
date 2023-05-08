"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv").config();
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    username: process.env.POSTGREE_USER,
    password: process.env.POSTGREE_PASSWORD,
    database: process.env.POSTGREE_DATABASE,
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.entity.ts"],
    migrations: ["src/migrations/*.ts"]
});
exports.default = AppDataSource;
