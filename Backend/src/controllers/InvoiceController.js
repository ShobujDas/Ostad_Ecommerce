
exports.InvoiceCreate =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'InvoiceCreate '
   })
}


exports.InvoiceList =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'InvoiceList '
   })
}



exports.InvoiceProductList=async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'InvoiceProductList '
   })
}



exports.PaymentSuccess =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'PaymentSuccess '
   })
}



exports.PaymentFail =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'PaymentFail '
   })
}



exports.PaymentCancel =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'PaymentCancel '
   })
}



exports.PaymentIPN =async (req,res)=>{

   return res.status(200).json({
      success:true,
      message:'PaymentIPN '
   })
}


