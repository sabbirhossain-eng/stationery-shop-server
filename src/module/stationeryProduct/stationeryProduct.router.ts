import { Router } from "express"
import { productController } from "./stationeryProduct.controller"

const productRouter = Router()

productRouter.post('/create-product', productController.createProduct)


export default productRouter