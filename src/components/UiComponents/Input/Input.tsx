import React from "react";
import classNames from "classnames";
import { firstLettersNotEmpty } from "../../..//utils/utils";
import "./Input.scss";

interface InputTextProps {
    value: string | number,
    field: string,
    onChange: (key: string, value: string | number) => void,
    placeholder: string,
    isError?: boolean,
    errorTxt?: string,
    type: React.InputHTMLAttributes<unknown>['type'],
}

const Input: React.FC<InputTextProps> = ({ value, field, onChange, placeholder, isError, type, errorTxt }): JSX.Element => {
    return (
        <div>
            {/* <input
                type={type}
                autoFocus
                placeholder={placeholder}
                value={value}
                onChange={(event) => {
                    if (type === "text" || type === "password") {
                        if (firstLettersNotEmpty(event.target.value)) return;
                        onChange(field, event.target.value);
                    }
                    else {
                        const numbers = /^[0-9]+$/;
                        if (event.target.value.match(numbers)) {
                            onChange(field, Number(event.target.value));
                        }
                        else if (event.target.value === '') {
                            onChange(field, "");
                        }
                    }
                }}
            /> */}
            <label className="input">
                <input className="input__field" type="text" placeholder=" " />
                <span className="input__label">Some Fancy Label</span>
            </label>
            {isError &&
                <span>{errorTxt}</span>
            }
        </div>
    );
};

export default Input;
