const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   total:{
      type:String,
      required:true,
   },
   vat :{
      type:String,
      required:true,
   },
   payable :{
      type:String,
      required:true,
   },
   cus_details :{
      type:String,
      required:true,
   },
   ship_details:{
      type:String,
      required:true,
   },
   tran_id :{
      type:String,
      required:true,
   },
   val_id :{
      type:String,
      required:true,
      default:'0',
   },
   delivery_status :{
      type:String,
      required:true,
   },
   payment_status :{
      type:String,
      required:true,
   },
},{timeStamps:true,versionkey:false});



const InvoicesModel = mongoose.models('invoices',DataSchema);
module.exports = InvoicesModel;