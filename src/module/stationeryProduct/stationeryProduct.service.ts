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
  }

//   GET by ID
const getProductById = async (id: string) => {

    const result = await Product.findById(id)
    return result
  }

//   Update Product

const updateProduct = async (productId: string, updatedDetails: IProduct)  => {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedDetails,
      { new: true } 
    );
    return updatedProduct;
  };
  

  export const productService = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct ,
  }
  