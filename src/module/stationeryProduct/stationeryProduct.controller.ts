import { Request, Response } from "express"
import { productService } from "./stationeryProduct.service"
import config from "../../config"

const createProduct = async (req: Request, res: Response) => {
    try {
      const payload = req.body
  
      const result = await productService.createProduct(payload)
  
      res.json({
        message: 'Product created successfully',
        success: true,
        data: result,
      })
    } catch (error: unknown) {
        let errorMessage = "Something went wrong";
        let errorStack: string | undefined;
    
        if (error instanceof Error) {
          errorMessage = error.message;
          errorStack = config.node_env ? error.stack : undefined;
        }
    
        res.status(500).json({
          message: errorMessage,
          success: false,
          stack: errorStack,
        });
      }
  }

  export const productController = {
    createProduct,
   
  }