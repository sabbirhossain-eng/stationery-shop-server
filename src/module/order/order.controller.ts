import { Request, Response } from "express";
import { IOrder } from "./order.interface";
import { orderService } from "./order.service";
import { handleError } from "../../handleError/handleError";

const createOrder = async (req: Request, res: Response) => {
    try {
      const payload: IOrder = req.body;
  
      const result = await orderService.createOrder(payload);
  
      res.json({
        message: "Product created successfully",
        success: true,
        data: result,
      });
    } catch (error: unknown) {
        handleError(error, res);
      }
  };

  export const orderController ={
    createOrder,
  }