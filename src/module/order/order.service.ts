import { IOrder } from './order.interface'
import Order from './order.model'

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload)

  return result
}

// get revenue
const getCalculateOrderRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: 'null',
        totalRevenue: { $sum: { $multiply: ['$quantity', '$totalPrice'] } },
      },
    },
    {
      $project: { totalRevenue: 1, _id: 0 },
    },
  ])
  return result
}

export const orderService = {
  createOrder,
  getCalculateOrderRevenue,
}
