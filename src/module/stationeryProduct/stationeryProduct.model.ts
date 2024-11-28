import { model, Schema } from 'mongoose'
import { IProduct } from './stationeryProduct.interface'

const stationeryProductSchema = new Schema<IProduct>(
   { name: {
        type: String,
        required: [true, "Please provide the name of the product"],
      },
      brand: {
        type: String,
        required: [true, "Please provide the brand name of the product"],
      },
      price: {
        type: Number,
        required: [true, "Please provide the price of the product"],
        min: [0, "Price must be a positive number"],
      },
      category: {
        type: String,
        enum: {
          values: [
            "Writing",
            "Office Supplies",
            "Art Supplies",
            "Educational",
            "Technology",
          ],
          message: "{VALUE} is not valid, please provide a valid category",
        },
        required: [true, "Please provide the category of the product"],
      },
      description: String,
      quantity: {
        type: Number,
        min: [0, "Quantity must be a positive number"],
        required: [true, "Please provide the quantity of the product"],
      },
      inStock: {
        type: Boolean,
        required: [true, "Please specify if the product is in stock"],
      },
  },
  {
    timestamps: true,
  }
)

const Product = model<IProduct>('Product', stationeryProductSchema)

export default Product
