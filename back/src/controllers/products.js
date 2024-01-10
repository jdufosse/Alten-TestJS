const products = require("../mock/products")

module.exports = {
    getAll: (req, res) => {
        console.log('products - getAll')
        res.send(products.getAll())
    },

    getOne: (req, res) => {
        console.log('products - getOne')
        res.send(products.getOne(req.params.productId))
    },

    create: (req, res) => {
        console.log('products - create')
        products.create(req.body)
        res.sendStatus(204)
    },

    update: (req, res) => {
        console.log('products - update')
        products.update(req.params.productId, req.body)
        res.sendStatus(204)
    },

    delete: (req, res) => {
        console.log('products - delete')
        products.delete(req.params.productId)
        res.sendStatus(204)
    }
}