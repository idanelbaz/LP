import React from "react";
import { validateEmail, validatePassword } from "../../../utils/utils";
import Input from "../Input/Input";
import "./EmailAndPassword.scss";

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


interface IEmailAndPasswordProps {
  email: string,
  password: string,
  onChange: (key: string, value: any) => void
}

const EmailAndPassword: React.FC<IEmailAndPasswordProps> = ({ email, password, onChange }): JSX.Element => {
  const isPasswordValid: boolean = validatePassword(password);
  const isEmailValid: boolean = validateEmail(email);
  const isInputEmailValid: boolean = email === "" || isEmailValid;
  const isInputPasswordValid: boolean = password === "" || isPasswordValid;

  return (
      <>
        <div className="input-container">
          <Input
            isError={!isInputEmailValid}
            errorTxt="Incorrect email address"
            onChange={onChange}
            value={email}
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
            value={password}
            placeholder="Password"
            field="password"
            type="password"
            isError={!isInputPasswordValid}
            errorTxt="Incorrect password"
            isInfoBtn
            infoTxt={passwordInfo}
          />
        </div>
      </>
  );
};

export default EmailAndPassword;
