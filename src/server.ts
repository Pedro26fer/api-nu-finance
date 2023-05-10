import AppDataSource  from "./data-source";
import app from ".";
import "dotenv";
import { debug } from "console";


AppDataSource.initialize()
.then(() => console.log("Database inicializado com sucesso"))
.catch((err) => console.log("Erro na execução do bnco", err))

let server = app.listen(app.get("port"), () => {
    debug(`Express server listening on a port ${server.address()}`)
})




