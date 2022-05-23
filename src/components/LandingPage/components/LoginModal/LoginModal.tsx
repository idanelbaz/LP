import React, { useState } from "react";
import { Dialog } from "@mui/material";
import classNames from "classnames";
import { validateEmail, validatePassword } from "../../../../utils/utils";
import Input from "../../../UiComponents/Input/Input";
import "./LoginModal.scss";

const passwordInfo: string[] = [
  "Min 1 lowercase character",
  "Min 1 uppercase character",
  "Min 1 number character",
  "Min 1 symbol character",
  "Min 8 character",
]

const emailInfo: string[] = [
  "Enter a valid Email. Ex: ex@ex.com"
]


interface ILoginModalProps {
  handleClose: (isClose: boolean) => void,
  isOpen: boolean,
  onLogin: (password: string, email: string) => void
}

const LoginModal: React.FC<ILoginModalProps> = ({ handleClose, isOpen, onLogin }): JSX.Element => {
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: ""
  });
  const isPasswordValid: boolean = validatePassword(userLoginDetails.password);
  const isEmailValid: boolean = validateEmail(userLoginDetails.email);
  const isInputEmailValid: boolean = userLoginDetails.email === "" || isEmailValid;
  const isInputPasswordValid: boolean = userLoginDetails.password === "" || isPasswordValid;
  const isBtnDisabled: boolean = !isEmailValid || !isPasswordValid;

  const onChange = (name: string, value: any) => {
    setUserLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  const onLoginClick = () => {
    if (!isBtnDisabled) {
      onLogin(userLoginDetails.password, userLoginDetails.email);
    }
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <div className="login-container">
        <span className="title">Join LP</span>
        <div className="input-container">
          <Input
            isError={!isInputEmailValid}
            errorTxt="Incorrect email address"
            onChange={onChange}
            value={userLoginDetails.email}
            placeholder="Email"
            field="email"
            type="text"
            isInfoBtn
            infoTxt={emailInfo}
          />
        </div>
        <div className="input-container">
          <Input
            onChange={onChange}
            value={userLoginDetails.password}
            placeholder="Password"
            field="password"
            type="password"
            isError={!isInputPasswordValid}
            errorTxt="Incorrect password"
            isInfoBtn
            infoTxt={passwordInfo}
          />
        </div>
        <div
          className={classNames("action-btn-continue", isBtnDisabled && "disabled")}
          onClick={onLoginClick}
          role="presentation"
        >Login
        </div>
      </div>
    </Dialog>
  );
};

export default LoginModal;
