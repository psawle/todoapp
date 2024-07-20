import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "../../components";
import "./loginStyle.css";
import { passwordValidation, validationEmail } from "../../helper";
import { getUserDataList, setCurrentUser} from "../../util";
import { appConstants } from "../../util";

export const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState({ emailError: "", passowrdError: "" });
  const navigate = useNavigate();

  const handleEmail = (emailValue) => {
    let id="login"
    let errormsg = validationEmail(emailValue,id);

    setValues({ ...values, email: emailValue });
    setError({ ...error, emailError: errormsg });

    if (errormsg) {
      return false;
    }
    return true;
  };

  const handlePassword = (passwordValue) => {
    let errormsg = passwordValidation(passwordValue);

    setValues({ ...values, password: passwordValue });
    setError({ ...error, passowrdError: errormsg });

    if (errormsg) {
      return false;
    }
    return true;
  };

  const goToSignup = () => {
    navigate("/signUp");
  };

  const saveChange = (event) => {
    let error = "";
    let user;
    let passcheck;
    let currentUser = [];
    let loginUserData = getUserDataList();

    let UserDataObj = {
      email: values.email,
      password: values.password,
    };

    if (!UserDataObj.email && !UserDataObj.password) {
      setError({
        emailError: appConstants.errorMsg.enterEmail,
        passowrdError: appConstants.errorMsg.enterPassword,
      });
      return;
    }

    if (loginUserData) {
      user = loginUserData.some((el) => {
        return (
          el.email === UserDataObj.email && el.password === UserDataObj.password
        );
      });
    } else {
      setError({...error,passowrdError:"please sign in first"})
      return;
    }

    if (loginUserData) {
      passcheck = loginUserData.find((el) => {
        if (el.email === UserDataObj.email) {
          return true;
        }
        return false;
      });

      if (
        passcheck &&
        passcheck.email === UserDataObj.email &&
        passcheck.password !== UserDataObj.password
      ) {
        setError({...error, passowrdError:"Incorrect Login details please try again"})
        return;
      }

      if (!user) {
        setError({...error,passowrdError:"no account found please sign in first"})
        return;
      }

      const checkEmail = handleEmail(values.email);
      const checkPassword = handlePassword(values.password)

      if (!checkEmail || !checkPassword) {
        setError({...error,passswordError:"Error"})
        return;
      } else {
       currentUser.push({
        email: UserDataObj.email,
        password: UserDataObj.password,
      });
      setCurrentUser(currentUser);
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
          <div className="col-lg-12 login-title">Login</div>

          <div className="col-lg-12 login-form">
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
            <div className="form-group">
              <label className="form-control-label label-1">PASSWORD</label>
              <Input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                errormsg={error.passowrdError}
                onChange={(e) => {
                  handlePassword(e.target.value);
                }}
              />
            </div>

            <div className="col-lg-12 loginbttm">
              <div className="col-lg-6 login-btm login-text"></div>
              <div className="col-lg-6 login-btm login-button">
                <Button
                  className="btn btn-outline-primary"
                  onClick={saveChange}
                  label="Login"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-6 mr MB-1 m">
        <label className="form-control-label">
          New to Website/Sign In first
        </label>
        <Button
          className="btn btn-outline-primary"
          onClick={goToSignup}
          label="SignUp"
        />
      </div>
    </div>
  );
};
