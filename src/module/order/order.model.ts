import { model, Schema,} from 'mongoose'
import { IOrder } from './order.interface'

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      },
      message: '{VALUE} is Invalid email address format',
    },
  },
  product: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    default: 1,
    required: true,
  },
  totalPrice: {
    type: Number,
    min: 0,
    required: true,
  },
},
{ timestamps: true })

const Order = model<IOrder>('Order', orderSchema)
export default Order
