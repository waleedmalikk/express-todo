

const emailRegex= /^\S+@\S+\.\S+$/;
const userPassRegex= /^[a-zA-Z0-9]*$/;

function isEmailValid(email) {
   return emailRegex.test(email)
}
function isUserPassValid(userPass){
    return userPassRegex.test(userPass);
}

module.exports={isEmailValid, isUserPassValid}