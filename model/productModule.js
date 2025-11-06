import mongoose from "mongoose";
import ConnectDB from "../config/db.js";
ConnectDB()
const productSchema = new  mongoose.Schema({
    id:{type:Number},
    title: { type: String },
    category: { type: String },
    image: { type: String },
    rating: {
        rate: { type: Number },
        count:{type:Number}
    },
    cost:{type:Number} 

})

export const Product =mongoose.model('Product',productSchema)
export default Product ;