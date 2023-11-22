const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
   email :{
      type:String,
      required:true,
      lowercase:true,
      unique:true,
   },
   otp :{
      type:String,
      required:true,
   }
},{timeStamps:true,versionkey:false});



const UserModel = mongoose.models('users',DataSchema);
module.exports = UserModel;