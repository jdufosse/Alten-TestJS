const products = require("../mock/products.json").data

class ProductManagerMock {
    #products
    #nextProductId

    constructor() {
        this.#products = products
        this.#nextProductId = this.#products.reduce((a, p) => Math.max(a, p.id), -Infinity); + 1
    }

    getAll = () => {
        return this.#products
    }

    getOne = (productId) => {
        return this.#products.find(p => p.id === productId)
    }

    create = (product) => {
        product.id = this.#nextProductId++
        this.#products.push(product)
    }

    update = (productId, product) => {
        productFromMock = this.getOne(productId)
        Object.entries(product).forEach(([key, value]) => {
            this.productFromMock[key] = value
        })
    }

    delete = (productId) => {
        this.#products.filter(p => p.id !== productId)
    }
}

module.exports = new ProductManagerMock()