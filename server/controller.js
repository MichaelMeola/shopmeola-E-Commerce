import { Product } from './db/models.js'

const handlerFunctions = {

    getProducts: async(req, res) => {
        const allProducts = await Product.findAll()
        res.send(allProducts)
    },

    addProduct: async (req, res) => {
        await Product.create({})
        const allProducts = await Product.findAll()
        res.send(allProducts)
      },

      deleteProduct: async (req, res) => {
        const { id } = req.params
      
        await Product.destroy({ where: { id } })
      
        const allProducts = await Product.findAll()
        res.send(allProducts)
      },

    editProduct: async (req, res) => {
        const { id } = req.params
        const { name, description, price, s, m, l, xl, image } = req.body
      
        await Product.update(
          { name, description, price, s, m, l, xl, image },
          { where: { id } }
        )
      
        const allProducts = await Product.findAll()
        res.send(allProducts)
      }
}

export default handlerFunctions