const ProfileModel = require("../models/ProfileModel");
const UserModel = require("../models/UserModel");
const SendEmailUtility = require("../utility/SendEmail");
const { EncodeToken } = require("./UserService/TokenHelper");

// UserOTP
const UserOTP = async (req) => {
  try {
    let email = req.params.email;
    let code = Math.floor(1000000 * Math.random());
    let EmailText = "Your verification code " + code;
    await SendEmailUtility(email, EmailText, "PIN Email Verification");
    await UserModel.updateOne({ email: email },{ $set: { otp: code } },{ upsert: true});
    return { status: "success", message: "6 Digit OTP has been send" };
  } catch (error) {
    return { status: "fail", message: "something went Wrong" };
  }
};

//UserVerify
const UserVerify = async (req)=>{
  try{
      let email=req.params.email;
      let code=req.params.otp;
      if(code==="0"){
          return {status:"fail", message:"Something Went Wrong"}
      }
      else {
          let total=await UserModel.find({email: email, otp: code}).count();
          if(total===1){
              let user_id=await UserModel.find({email: email, otp: code}).select('_id');
              let token= EncodeToken(email,user_id[0]['_id'].toString())
              await UserModel.updateOne({email:email}, {$set:{otp:'0'}}, {upsert:true})
              return {status:"success", message:"Valid OTP", token:token,userId:user_id}
          }else{
              return {status:"fail", message:"Something Went Wrong"}
          }
      }
  }
  catch (e) {
      return {status:"fail", data:"Something Went Wrong"}
  }
}

//User Profile Save
const UserProfileSave = async (req)=>{
  try {
    let User_id = req.headers.id;
    let reqBody = req.body;
    reqBody.userID = User_id;
    await ProfileModel.updateOne({userID:User_id},{$set:reqBody},{upsert:true});
    return {status:"success",message:"Prfile Save Changedd"};
    
  } catch (error) {
    return {status:"fail",message:"Something Went Wrong"};
    
  }
}

//User Profile Save
const UserProfileDetails = async (req)=>{
  try {
    let User_id = req.headers.id;
    const data = await ProfileModel.find({userID:User_id});
    return {status:"success",data:data};
    
  } catch (error) {
    return {status:"fail",message:"Something Went Wrong"};
    
  }


}

module.exports = {UserOTP,UserVerify,UserProfileSave,UserProfileDetails};
