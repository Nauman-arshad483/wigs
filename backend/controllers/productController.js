const Product = require("../models/productModel");
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middleware/catchAsyncError");

const apiFeatures = require("../utils/apiFeatures");
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  console.log(req.body);
  res.status(201).json({
    success: true,
    product,
  });
}); 

exports.getAllProducts=catchAsyncErrors(async(req,res,next)=>{
  //return next(new ErrorHandler("this is my temp error",500))
  const resultPerPage=8;
  const apiFeature=new apiFeatures(Product.find(),req.query).search().pagination(resultPerPage);
  const products=await apiFeature.query;
  if(!products)
  {
    return next(new ErrorHandler("product not found",404))
  }
  res.status(200).json({
    success:true,
    products
  })
});

exports.getProductDetails=catchAsyncErrors(async(req,res,next)=>{
  const product=await Product.findById(req.params.id);
  if(!product)
  {
    
    return next(new ErrorHandler("product not found",404))
  }
  res.status(200).json({
    success:true,
    product
  })
})