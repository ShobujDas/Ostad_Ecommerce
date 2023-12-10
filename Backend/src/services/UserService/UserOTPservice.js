const UserModel = require("../../models/UserModel");
const SendEmailUtility = require("../../utility/SendEmail");


const UserOTP = async (req) => {
  try {
    let email = req.params.email;
    let code = Math.floor(1000000 * Math.random());
    let EmailText = "Your verification code " + code;
    await SendEmailUtility(email, EmailText, "PIN Email Verification");
    await UserModel.updateOne({ email: email },{ $set: { otp: code } }, { upsert: true });
    return { status: "success", message: "6 Digit OTP has been send"};

  } catch (error) {
    return { status: "fail", message: "something went Wrong" };
  }
};

module.exports = UserOTOPSservice;
