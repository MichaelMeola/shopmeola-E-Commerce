import { Product } from './db/models.js'

const handlerFunctions = {

    getProducts: async (req, res) => {
        const allProducts = await Product.findAll()
        res.send(allProducts)
    }
}

export default handlerFunctions