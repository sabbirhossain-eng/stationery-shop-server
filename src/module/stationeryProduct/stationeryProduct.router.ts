import { Router } from 'express'
import { productController } from './stationeryProduct.controller'

const productRouter = Router()

productRouter.post('/', productController.createProduct)
productRouter.get('/', productController.getProducts)
productRouter.get('/:productId', productController.getProductById)
productRouter.put('/:productId', productController.updateProduct)
productRouter.delete('/:productId', productController.deleteProduct)

export default productRouter
