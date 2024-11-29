/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { IOrder } from "./order.interface";
import { orderService } from "./order.service";
import { handleError } from "../../handleError/handleError";

const createOrder = async (req: Request, res: Response) => {
    try {
      const payload: IOrder = req.body;
  
      const result = await orderService.createOrder(payload);
  
      res.send({
        message: "Order created successfully",
        success: true,
        data: result,
      });
    } catch (error: any) {
        handleError(error, res);
      }
  };


//   GET order calculate Revenue
const getCalculateOrderRevenue = async (req: Request, res: Response)=> {
    try {
      const totalRevenue = await orderService.getCalculateOrderRevenue();

      res.send({
        message: "Revenue calculated successfully",
        success: true,
        data: {
          totalRevenue,
        },
      });
    } catch (error: any) {
        handleError(error, res);
      }
  };



  export const orderController ={
    createOrder,
    getCalculateOrderRevenue
  }