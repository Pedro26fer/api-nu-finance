import express from 'express'
import { userRoutes } from './routes/userRoutes.routes'
import { globalErrorMiddleware } from './middlewares/globalError.middleware'
import { accountsRoutes } from './routes/accountsRoutes.routes'
import { transactionsRoute } from './routes/transactionsRoute.routes'
import { sessionRoutes } from './routes/sessionRoute.routes'
import AppDataSource from './data-source'


AppDataSource.initialize()
.then(() => {

    const app = express()
    
    app.use(express.json())
    
    app.use(globalErrorMiddleware)

    userRoutes(app)
    sessionRoutes(app)
    accountsRoutes(app)
    transactionsRoute(app)

    return app.listen(process.env.PORT || 3000)
  

})
.catch((err) => console.log("Erro na execução do bnco", err))







