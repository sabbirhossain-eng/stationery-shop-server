import { Request, Response } from "express";
import { productService } from "./stationeryProduct.service";
import { IProduct } from "./stationeryProduct.interface";
import { handleError } from "../../handleError/handleError";

const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const payload: IProduct = req.body;
  
      const result = await productService.createProduct(payload);
  
      res.json({
        message: "Product created successfully",
        success: true,
        data: result,
      });
    } catch (error: unknown) {
        handleError(error, res);
      }
  };
  

export const productController = {
  createProduct,
};
