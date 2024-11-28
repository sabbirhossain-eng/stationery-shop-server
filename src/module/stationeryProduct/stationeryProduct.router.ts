import { Router } from "express"
import { productController } from "./stationeryProduct.controller"

const productRouter = Router()

productRouter.post('/', productController.createProduct)
productRouter.get('/', productController.getProducts)
productRouter.get('/productID', productController.getProductById)


export default productRouter