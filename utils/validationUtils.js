

const emailRegex= /^\S+@\S+\.\S+$/;
const userPassRegex= /^[a-zA-Z0-9]*$/;

function isEmailValid(email) {
   return (email && emailRegex.test(email));
}
function isUserPassValid(userPass){
    return (userPass && userPass.length>=5 && userPassRegex.test(userPass));
}

module.exports={isEmailValid, isUserPassValid}