import { getUserDataList } from "../util";
import { appConstants } from "../util/appConstant";

export const validationName = (nameValue) => {
    const regName = /^[a-zA-Z]+$/;

    if (!nameValue) {
     return appConstants.errorMsg.enterName;
    }

    if (!regName.test(nameValue)) {
      return appConstants.errorMsg.nameContainsDigitError;
    }

    if ( (nameValue.length < 5 || nameValue.length > 20 )) {
     return appConstants.errorMsg.nameLengthError;
    }
  return "";
}


export const validationEmail = (emailValue,id) => {
    let usedEmail;
    const loginUserData = getUserDataList();
    const pattern = /^[A-Za-z._0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
   console.log("ifffffffffdddddddddddddddddddddddddddddd",id)
    if (!emailValue) {
      return appConstants.errorMsg.enterEmail;
    }

    if (loginUserData) {
      usedEmail = loginUserData.some((element) => {
        return element.email === emailValue;
      });
    }
    if(id === "signup")  {
      if(usedEmail){
        return appConstants.errorMsg.existingUserError
      }
    }

    if (!pattern.test(emailValue)) {
      return appConstants.errorMsg.inValidEmail;
    }

    return "";
}

export const passwordValidation = (passwordValue) => {
  let passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!passwordValue) {
      return appConstants.errorMsg.enterPassword;
    }
    if (!passwordPattern.test(passwordValue)) {
      return  appConstants.errorMsg.inValidPassword;
    }

    return "";
}

export const confirmPasswordValidation = (confirmPasswordValue,passwordValue) => {
  if (!confirmPasswordValue) {
    return appConstants.errorMsg.enterConfirmPassword;
  }

  if (!(confirmPasswordValue === passwordValue)) {
    return appConstants.errorMsg.passwordNotMatchError ;
  }

  return "";
}

export const phoneNoValidation = (phoneNoValue) => {

  if (!phoneNoValue) {
    return  appConstants.errorMsg.enterPhoneNo; 
  }

  if (isNaN(phoneNoValue)) {
    return appConstants.errorMsg.numberContainsStringError;
  }

  if (phoneNoValue.length !== 10) {
    return  appConstants.errorMsg.PhoneNoLengthError;
  }

  return "";
}

export const addressValidation = (addressValue) => {

  if (addressValue.length < 8) {
    return appConstants.errorMsg.enterAddress;
  }

  return "";
}