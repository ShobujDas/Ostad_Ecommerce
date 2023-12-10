const UserVerifyService = async (email, code, DataModel) => {
  if (code=="0") {
    return 0 
  } else {
    return await DataModel.find({ email: email, otp: code }).count("total");
  }
};
exports.UserVerifyService = UserVerifyService;
