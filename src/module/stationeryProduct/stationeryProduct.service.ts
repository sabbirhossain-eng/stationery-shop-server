import { IProduct } from "./stationeryProduct.interface"
import Product from "./stationeryProduct.model"

const createProduct = async (payload: IProduct): Promise<IProduct> => {
    const result = await Product.create(payload)
  
    return result
  }

//   get all product

  const getProducts = async (searchTerm?: string): Promise<IProduct[]> => {
    if (searchTerm) {
      const regex = new RegExp(searchTerm, "i"); 
  
      return Product.find({
        $or: [
          { name: { $regex: regex } },
          { brand: { $regex: regex } },
          { category: { $regex: regex } },
        ],
      });
    }
    
    const result = Product.find({})
    return result
  };

  export const productService = {
    createProduct,
    getProducts,
  }
  