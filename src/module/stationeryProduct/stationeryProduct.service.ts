import { IProduct } from "./stationeryProduct.interface"
import Product from "./stationeryProduct.model"

const createProduct = async (payload: IProduct): Promise<IProduct> => {
    const result = await Product.create(payload)
  
    return result
  }

  export const productService = {
    createProduct,
  }
  