require('dotenv').config()
const express = require("express")
const app = express();
const productRoutes = require('./routes/productRoutes')
const connectDB = require("./config/db")

connectDB();

app.use(express.json())
app.use('./products', productRoutes)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Servidor ativo na porta " + PORT))