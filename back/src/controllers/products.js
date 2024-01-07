const products = require("../mock/products")

module.exports = {
    getAll: (req, res) => {
        console.log('products - getAll')
        res.send(products.getAll())
    },

    getOne: (req, res) => {
        console.log('products - getOne')
        res.send(products.getOne(req.productId))
    },

    create: (req, res) => {
        console.log('products - create' + req)
        //res.send(products.create(req.product))
        res.sendStatus(200)
    },

    update: (req, res) => {
        console.log('products - update' + req)
        products.update(p => p.id === req.productId)
        res.sendStatus(200)
    },

    delete: (req, res) => {
        console.log('products - delete')
        products.delete(p => p.id === req.productId)
        res.sendStatus(200)
    }
}