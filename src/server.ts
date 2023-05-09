import AppDataSource  from "./data-source";
import app from ".";


AppDataSource.initialize()
.then(() => console.log("Database inicializado com sucesso"))
.catch((err) => console.log("Erro na execução do bnco", err))

app.listen(3000, () => {
    console.log("Api no ar")
})




