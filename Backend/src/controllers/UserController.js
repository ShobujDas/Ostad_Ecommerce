
const {UserOTP, UserVerify} = require("../services/UserService");



//User Login Controller
exports.UserLogin = async (req, res) => {

  let result = await UserOTP(req);
  return res.status(200).json({result});
  

};



//verifyLogin Controller
exports.VerifyLogin = async (req, res) => {
   let result = await UserVerify(req);
   return res.status(200).json({result});
};


//UserLogOut controller
exports.UserLogout = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "UserLogout ",
  });
};
