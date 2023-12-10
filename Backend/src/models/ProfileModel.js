




const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
   userID :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   
   cus_name :{
      type:String,
      required:true,
   },
   cus_add :{
      type:String,
      required:true,
   },
   cus_city :{
      type:String,
      required:true,
   },
   cus_state:{
      type:String,
      required:true,
      default:'Dhaka',
   },
   cus_postcode:{
      type:String,
      required:true,
      default:'3570',
   },
   cus_country :{
      type:String,
      required:true,
      default:'Bangladesh'
   },
   cus_phone :{
      type:String,
      required:true,
      default:'Bangladesh'
   },
   cus_fax :{
      type:String,
      required:true,
      default:'Bangladesh'
   },

   ship_name :{
      type:String,
      required:true,
      default:'Bangladesh'
   },
   ship_add :{
      type:String,
      required:true,
   },
   ship_city :{
      type:String,
      required:true,
   },
   ship_state:{
      type:String,
      required:true,
      default:'Dhaka',
   },
   ship_postcode:{
      type:String,
      required:true,
      default:'3570',
   },
   ship_country :{
      type:String,
      required:true,
      default:'Bangladesh'
   },
   ship_phone :{
      type:String,
      required:true,
      default:'Bangladesh'
   },

},{timeStamps:true,versionkey:false});



const ProfileModel = mongoose.model('profiles',DataSchema);
module.exports = ProfileModel;