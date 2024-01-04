import { Product, User } from './db/models.js'

const handlerFunctions = {

    getProducts: async(req, res) => {
        const allProducts = await Product.findAll()
        res.send(allProducts)
    },

    getUsers: async(req, res) => {
      const allUsers = await User.findAll()
      res.send(allUsers)
  },

    addProduct: async (req, res) => {
        await Product.create({})
        const allProducts = await Product.findAll()
        res.send(allProducts)
      },

    addUser: async (req, res) => {
      const { email, phone } = req.body
      await User.create({ email, phone })
        const allUsers = await User.findAll()
        res.send(allUsers)
      },

    deleteProduct: async (req, res) => {
        const { productId } = req.params
      
        await Product.destroy({ where: { productId } })
      
        const allProducts = await Product.findAll()
        res.send(allProducts)
      },

    deleteUser: async (req, res) => {
        const { userId } = req.params
      
        await User.destroy({ where: { userId } })
      
        const allUsers = await User.findAll()
        res.send(allUsers)
      },

    editProduct: async (req, res) => {
        const { productId } = req.params
        const { name, description, price, s, m, l, xl, image } = req.body
      
        await Product.update(
          { name, description, price, s, m, l, xl, image },
          { where: { productId } }
        )
      
        const allProducts = await Product.findAll()
        res.send(allProducts)
      }
}

export default handlerFunctions