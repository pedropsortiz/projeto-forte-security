require('dotenv').config()

const productsData = require('./data/produtc.js')
const connectDB = require('./config/db.js')
const Product = require('./models/Product.js')

connectDB()

const importData = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(productsData)
        console.log("Dados importados com sucesso")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

importData();