"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("./data-source"));
const _1 = __importDefault(require("."));
data_source_1.default.initialize()
    .then(() => console.log("Database inicializado com sucesso"))
    .catch((err) => console.log("Erro na execução do bnco", err));
_1.default.listen(3001, () => {
    console.log("Api no ar");
});
