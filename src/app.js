import express from "express";
import employeesRoutes from './routes/employees.routes.js'
import indexRouter from "./routes/index.routes.js";

const app = express()

app.use(express.json())

app.use(indexRouter)
app.use('/api' ,employeesRoutes)

//Midleware para manejar cualquier busqueda que no sea las que indicamos arriba
app.use((req, res, next) => {
    res.status(404).json({
        mesage: 'Endpoint not found'
    })
})

export default app;