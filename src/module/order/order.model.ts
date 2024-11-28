import { model, Schema, Types } from 'mongoose'

const orderSchema = new Schema({
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
    type: Types.ObjectId,
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
})

const Order = model('Order', orderSchema)
export default Order
