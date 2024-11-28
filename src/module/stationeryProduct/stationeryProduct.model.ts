import { model, Schema } from "mongoose";

const stationeryProductSchema =new Schema({
    name: {
        type: String,
        required: [true, 'Please provide The name of the product'],
    },
    brand:{
        type: String,
        required: [true, 'Please provide The Brand Name of the product'],
    },
    price:{
        type: Number,
        required: [true, 'Please provide The price of the product'],
        min: 0,
    },
    category:{
        type: String,
        enum:{
           values:['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
            message:'{VALUE} is not valid, please provide a valid category'
        },
        required: true,
    },
    description:String,
    quantity:{
        type: Number,
        min:0,
        required: [true, 'Please provide The quantity of the product, minimum quantity 0'],
    },
    inStock:{
        type:Boolean,
        required: [true, 'Please provide The stock of the product'],
    },
    
},
{
    timestamps: true,
})

const Product = model("Product", stationeryProductSchema)

export default Product;