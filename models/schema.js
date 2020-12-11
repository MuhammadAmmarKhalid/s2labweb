const { string } = require("joi");
const mongoose = require("mongoose");
//in order to create schema

const productSchema = 
  mongoose.Schema({
      name:String,
      id:Number,
      duration:Number,
      fee:Number
}); 
const ProductModel = mongoose.model("Product",productSchema);//model name 
//then, schema name
module.exports = ProductModel; 