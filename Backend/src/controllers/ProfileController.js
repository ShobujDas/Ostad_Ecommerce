const { UserProfileSave, UserProfileDetails } = require("../services/UserService");

//Create Profile
exports.CreateProfile =async (req,res)=>{

   let result = await UserProfileSave(req);
   return res.status(200).json(result)
}

//Read Profile
exports.ReadProfile =async (req,res)=>{

   let result = await UserProfileDetails(req);
   return res.status(200).json(result);
  
}

//Update Profile
exports.UpdateProfile =async (req,res)=>{

   let result = await UserProfileSave(req);
   return res.status(200).json(result);
   
}


