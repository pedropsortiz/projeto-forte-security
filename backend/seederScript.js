require("dotenv").config()

const productData = require("./data/produtc")
const connectDB = require("./data/produtc")
const Product = require("./models/Product")

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({})

    await Product.insertMany(productData)

    console.log("Dados importados com sucesso")

    process.exit()
  } catch (error) {
    console.error("Erro com a importação dos dados: " + error)
    process.exit(1)
  }
};

importData()