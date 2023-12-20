import express from "express"
import morgan from "morgan"
import ViteExpress from "vite-express"

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

import handlerFunctions from "./controller.js"
const { getProducts } = handlerFunctions

app.get('/products', getProducts)

ViteExpress.listen(app, 6969, () => console.log(`Server running on http://localhost:6969`))