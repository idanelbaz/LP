import React, { useState } from "react";
import { Dialog } from "@mui/material";
import classNames from "classnames";
import { validateEmail, validatePassword } from "../../../../utils/utils";
import EmailAndPassword from "../../../UiComponents/EmailAndPassword/EmailAndPassword";
import "./LoginModal.scss";

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
        <EmailAndPassword
          email={userLoginDetails.email}
          password={userLoginDetails.password}
          onChange={onChange}
        />
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
