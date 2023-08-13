require("dotenv").config()
const express = require("express")
const productRoutes = require("./routes/productRoutes")
const connectDB = require("./config/db")
const cors = require('cors');

connectDB()

const app = express()

app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API iniciada..." })
});

app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Servidor ativo na porta " + PORT))