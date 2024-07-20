import React, { useState } from "react";

import { Input, Button } from "../../components";
import {
  validationName,
  validationEmail,
  passwordValidation,
  confirmPasswordValidation,
  phoneNoValidation,
  addressValidation,
} from "../../helper";
import "./signupStyle.css";
import { getUserDataList, setUserDataList, setCurrentUser, appConstants } from "../../util";

export const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: 0,
    address: "",
  });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    phoneNoError: "",
    addressError: "",
  });

  const handleName = (nameValue) => {
    let nameError = validationName(nameValue);

    setError({ ...error, nameError });
    setUserData({ ...userData, name: nameValue });

    if (nameError) {
      return false;
    }
    return true;
  };

  const handleEmail = (emailValue) => {
    let id="signup"
    let emailError = validationEmail(emailValue,id);

    setError({ ...error, emailError });
    setUserData({ ...userData, email: emailValue });

    if (emailError) {
      return false;
    }
    return true;
  };

  const handlePassword = (passwordValue) => {
    let passwordError = passwordValidation(passwordValue);

    setError({ ...error, passwordError });
    setUserData({ ...userData, password: passwordValue });
    if (!passwordError) {
      return true;
    }
    return false;
  };

  const handleConfrimPassword = (confirmPasswordValue) => {
    let confirmPasswordError = confirmPasswordValidation(
      confirmPasswordValue,
      userData.password
    );

    setError({ ...error, confirmPasswordError });
    setUserData({ ...userData, confirmPassword: confirmPasswordValue });

    if (confirmPasswordValue) {
      return true;
    }
    return false;
  };

  const handlePhoneNo = (phoneNoValue) => {
    let phoneNoError = phoneNoValidation(phoneNoValue);

    setError({ ...error, phoneNoError });
    setUserData({ ...userData, phoneNo: phoneNoValue });
    if (!phoneNoError) {
      return true;
    }
    return false;
  };

  const handleAddress = (addressValue) => {
    let addressError = addressValidation(addressValue);

    setError({ ...error, addressError });
    setUserData({ ...userData, address: addressValue });
  };

  const submitChange = () => {
    const currentUser = [];
    const existingUserData = getUserDataList() || [];

    const userDataObj = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      phoneNo: userData.phoneNo,
      address: userData.address,
    };
  
    if (
      !userDataObj.name &&
      !userDataObj.email &&
      !userDataObj.password &&
      !userDataObj.confirmPassword &&
      !userDataObj.phoneNo &&
      !userDataObj.address
    ) {
      setError({nameError: "Enter name",
                emailError:appConstants.errorMsg.enterEmail,
                passwordError:appConstants.errorMsg.enterPassword,
                confirmPasswordError:appConstants.errorMsg.enterConfirmPassword,
                phoneNoError:appConstants.errorMsg.enterPhoneNo,
              });
      return;
    }

    const checkName = handleName(userData.name);
    const checkEmail = handleEmail(userData.email);
    const checkPassword = handlePassword(userData.password);
    const checkConfirmPassword = handleConfrimPassword(userData.confirmPassword);
    const checkPhoneNO = handlePhoneNo(userData.phoneNo);

    if (
      checkName &&
      checkEmail &&
      checkPassword &&
      checkConfirmPassword &&
      checkPhoneNO
    ) {
      if (!existingUserData) {
        return;
      } else {
        currentUser.push({
          email: userDataObj.email,
          password: userDataObj.password,
        });
        setCurrentUser(currentUser);
        setUserDataList(existingUserData, userDataObj);
        window.location.href = "/dashboard";
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="col-lg-12 login-title">Sign Up</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <label className="form-control-label label-1">Name</label>
              <Input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                errormsg={error.nameError}
                onChange={(e) => {
                  handleName(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12 login-form">
              <label className="form-control-label label-1">EMAIL</label>
              <Input
                type="text"
                placeholder="Enter Email"
                className="form-control"
                errormsg={error.emailError}
                onChange={(e) => {
                  handleEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12 login-form">
              <label className="form-control-label label-1">
                ENTER PASSWORD
              </label>
              <Input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                errormsg={error.passwordError}
                onChange={(e) => {
                  handlePassword(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12 login-form">
              <label className="form-control-label label-1">
                CONFIRM PASSWORD
              </label>
              <Input
                type="password"
                placeholder="Confrim Password"
                className="form-control"
                errormsg={error.confirmPasswordError}
                onChange={(e) => {
                  handleConfrimPassword(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12 login-form">
              <label className="form-control-label label-1">
                ENTER PHONE NO
              </label>
              <Input
                type="text"
                placeholder="Enter Phone Number"
                className="form-control"
                errormsg={error.phoneNoError}
                onChange={(e) => {
                  handlePhoneNo(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12 login-form">
              <label className="form-control-label label-1">
                ENTER ADDRESS
              </label>
              <Input
                type="text"
                placeholder="Enter Address"
                className="form-control"
                errormsg={error.addressError}
                onChange={(e) => {
                  handleAddress(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12 loginbttm">
              <div className="col-lg-6 login-btm login-text"></div>
              <div className="col-lg-6 login-btm login-button">
                <Button
                  className="btn btn-outline-primary"
                  onClick={submitChange}
                  label="Sign Up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
