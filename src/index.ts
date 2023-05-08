import express from 'express'
import cors from 'cors'
import { userRoutes } from './routes/userRoutes.routes'
import { globalErrorMiddleware } from './middlewares/globalError.middleware'
import { accountsRoutes } from './routes/accountsRoutes.routes'
import { transactionsRoute } from './routes/transactionsRoute.routes'
import { sessionRoutes } from './routes/sessionRoute.routes'





const app = express()

app.use(express.json())

app.use(globalErrorMiddleware)

app.use(cors())


userRoutes(app)
sessionRoutes(app)
accountsRoutes(app)
transactionsRoute(app)


export default app

