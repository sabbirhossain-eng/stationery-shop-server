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

//   GET all products

const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
  
        const { searchTerm } = req.query; 
        const result = await productService.getProducts(searchTerm as string);
  
      res.send({
        message: "Products retrieved successfully",
        success: true,
        data: result,
      });
    } catch (error: unknown) {
        handleError(error, res);
      }
  };
//   GET products by ID

const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
  
        const productId = req.params.productId

        const result = await productService.getProductById(productId)
  
      res.send({
        message: "Products retrieved successfully",
        success: true,
        data: result,
      });
    } catch (error: unknown) {
        handleError(error, res);
      }
  };
//   update product

const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
  
        const productId = req.params.productId

        const updatedDetails = req.body

        const result = await productService.updateProduct(productId, updatedDetails)
  
      res.send({
        message: "Products retrieved successfully",
        success: true,
        data: result,
      });
    } catch (error: unknown) {
        handleError(error, res);
      }
  };
  

export const productController = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
};
