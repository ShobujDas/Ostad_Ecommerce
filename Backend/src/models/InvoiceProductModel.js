const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
    userID:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   invoiceID:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   productID:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },

   qty:{
      type:String,
      required:true,
   },
   sale_price :{
      type:String,
      required:true,
   },
   color :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   size :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },

},{timeStamps:true,versionkey:false});



const InvoiceProductModel = mongoose.models('invoiceProducts',DataSchema);
module.exports = InvoiceProductModel;