const router = require("express").Router()
const controller = require("../controllers/products")

router.get('/', controller.getAll)
router.post('/', controller.create)
router.get('/:productId', controller.getOne)
router.patch('/:productId', controller.update)
router.delete('/:productId', controller.delete)

module.exports = router