const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
   userID :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   productID :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   }
},{timeStamps:true,versionkey:false});



const WishModel = mongoose.models('wishes',DataSchema);
module.exports = WishModel;