import React, { useState } from "react";
import classNames from "classnames";
import { ReactComponent as InfoIcon } from '../../../style/images/info-icon.svg';
import { Tooltip } from "@mui/material";
import "./Input.scss";

const renderTooltipEl = (txt: string[]) => {
    return (
        <div className="tooltip-info-el">
            {txt.map(row =>
                <li key={row}>{row}</li>
            )}
        </div>
    )
}

interface InputTextProps {
    value: string | number,
    field: string,
    onChange: (key: string, value: string | number) => void,
    placeholder: string,
    isError?: boolean,
    errorTxt?: string,
    type: React.InputHTMLAttributes<unknown>['type'],
    isInfoBtn: boolean,
    infoTxt?: string[],
    inputProps?: any
}

const Input: React.FC<InputTextProps> = ({ value, field, onChange,
    placeholder, isError, type, errorTxt, isInfoBtn, infoTxt, inputProps }): JSX.Element => {

    const [isInfoMenuOpen, setIsInfoMenuOpen] = useState(false)

    const toggleIsOpen = () => {
        setIsInfoMenuOpen(prev => !prev)
    };

    return (
        <div className="input-container">
            <div className={classNames("input-txt-and-err-wrapper",
                (!isInfoBtn || !infoTxt) && "full-width")}>
                <label className="input">
                    <input
                        onChange={(event => onChange(field, event.target.value))}
                        type={type} className="input__field" placeholder=" "
                        value={value}
                        {...inputProps}
                    />
                    <span className="input__label">{placeholder}</span>
                </label>
                {isError &&
                    <span className="err-txt">{errorTxt}</span>
                }
            </div>
            {isInfoBtn && infoTxt &&
                <Tooltip
                    onClose={() => setIsInfoMenuOpen(false)}
                    title={renderTooltipEl(infoTxt)}
                    arrow
                    open={isInfoMenuOpen}
                >
                    <div onClick={toggleIsOpen} className="info-icon-wrapper">
                        <InfoIcon />
                    </div>
                </Tooltip>
            }
        </div>
    );
};

export default Input;
