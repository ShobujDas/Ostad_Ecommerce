const jwt = require('jsonwebtoken');

//Encoded token
function EncodeToken(email,user_id){
   return  jwt.sign({email:email,id:user_id},"ABC123",{expiresIn:'1h'})
}

// Decode token 
function DecokeToken(token){
   try {
      return jwt.verify(token,'ABC123')
   } catch (error) {
      return null;
   }

}

module.exports = {EncodeToken,DecokeToken}