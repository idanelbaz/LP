import React, { useState } from "react";
import "./LoginModal.scss";
import { Dialog } from "@mui/material";
import classNames from "classnames";
import { validateEmail } from "../../../../utils/utils";
import Input from "../../../UiComponents/Input/Input";

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
  const isBtnDisabled: boolean = !validateEmail(userLoginDetails.email) || !userLoginDetails.password;

  const onChange = (name: string, value: any) => {
    setUserLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  const onLoginClick = () => {
    onLogin(userLoginDetails.password, userLoginDetails.email);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <div className="login-container">
        <span className="title">Join 120</span>
        <div className="input-container">
          <Input
            isError={!validateEmail(userLoginDetails.email)}
            errorTxt="Incorrect email address"
            onChange={onChange}
            value={userLoginDetails.email}
            placeholder="Your Email"
            field="email"
            type="text"
          />
        </div>
        <div className="input-container">
          <Input
            onChange={onChange}
            value={userLoginDetails.password}
            placeholder="Enter password"
            field="password"
            type="password"
          />
        </div>
        <div
          className={classNames("action-btn-continue", isBtnDisabled && "disabled")}
          onClick={onLoginClick}
          role="presentation"
        >Continue
        </div>
      </div>
    </Dialog>
  );
};

export default LoginModal;
