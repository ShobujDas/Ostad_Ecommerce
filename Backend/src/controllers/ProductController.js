const { ProductByRemark, ProductByCategory, ProductByBrand, ProductByCategoryLimited10, ProductByKewWord } = require("../services/ProductService")

exports.SliderList =async (req,res)=>{

   let result = await ProductBySilder(req);
   return res.status(200).json(result)
}


exports.ListByCategroy =async (req,res)=>{
   let result = await ProductByCategory(req);
   return res.status(200).json(result)
}

exports.ListBySmilier =async (req,res)=>{

   let result = await ProductByCategoryLimited10(req);
   return res.status(200).json(result)
}


exports.ListByBrand =async (req,res)=>{

 
   let result = await ProductByBrand(req);
   return res.status(200).json(result)
}


exports.ListByKeyWord =async (req,res)=>{
   
   let result = await ProductByKewWord(req);
   return res.status(200).json(result)
}


exports.ListReview =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'ListReview List'
   })
}



exports.ProductDetails =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'ProductDetails List'
   })
}

exports.ListByRemark =async (req,res)=>{

   let result = await ProductByRemark(req);
   return res.status(200).json(result)
}



exports.WishList =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'WishList '
   })
}



exports.CreateWistList =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'CreateWistList '
   })
}



exports.RemoveWistList =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'RemoveWistList '
   })
}




exports.CartList =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'CartList '
   })
}



exports.CreateCartList =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'CreateCartList '
   })
}




exports.RemoveCartList =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'RemoveCartList '
   })
}


