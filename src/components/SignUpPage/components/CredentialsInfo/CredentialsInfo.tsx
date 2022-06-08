import React from "react";
import EmailAndPassword from "../../../UiComponents/EmailAndPassword/EmailAndPassword";
import "./CredentialsInfo.scss"

interface CredentialsInfoProps {
    editedEmail: string,
    editredPassword: string,
    onChange: (name: string, value: any) => void,
}


const CredentialsInfo: React.FC<CredentialsInfoProps> = ({
    editedEmail,
    editredPassword,
    onChange
}): JSX.Element => {
    

    return (
        <div className="credentials-info-container">
            <EmailAndPassword email={editedEmail} password={editredPassword} onChange={onChange}/>
        </div>
    );
};

export default CredentialsInfo;
