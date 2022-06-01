import React from "react";
import DateInput from "../../../UiComponents/DateInput/DateInput";
import Input from "../../../UiComponents/Input/Input";

interface PersonalDetailsProps {
    editedName: string,
    editredBirthday: Date,
    onChange: (name: string, value: any) => void
}


const PersonalDetails: React.FC<PersonalDetailsProps> = ({
    editedName,
    editredBirthday,
    onChange
}): JSX.Element => {

    return (
        <>
            <Input
                onChange={onChange}
                value={editedName}
                placeholder="Nickname"
                field="name"
                type="text"
                errorTxt="Incorrect password"
                isInfoBtn={false}
            />
            <DateInput
                field="birthdate"
                isTime={false}
                value={editredBirthday}
                onChange={onChange}
                label="Birth date"
            />
        </>
    );
};

export default PersonalDetails;
