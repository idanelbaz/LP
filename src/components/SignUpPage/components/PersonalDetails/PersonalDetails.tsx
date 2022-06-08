import React, { useState } from "react";
import { firstLettersNotEmpty } from "../../../../utils/utils";
import DateInput from "../../../UiComponents/DateInput/DateInput";
import Input from "../../../UiComponents/Input/Input";
import AvatarPicker from "../AvatarPicker/AvatarPicker";

interface PersonalDetailsProps {
    editedName: string,
    editredBirthday: Date,
    onChange: (name: string, value: any) => void,
    editedAvatarUrl: string
}


const PersonalDetails: React.FC<PersonalDetailsProps> = ({
    editedName,
    editredBirthday,
    editedAvatarUrl,
    onChange
}): JSX.Element => {
    const [isAvatarPickerOpen, setIsAvatarPickerOpen] = useState(false);

    const handleCloseModal = () => {
        setIsAvatarPickerOpen(false);
    }

    const handleOpenModal = () => {
        setIsAvatarPickerOpen(true);
    }

    const onSelectAvatar = (avatarUrl: string) => {
        onChange("avatarUrl", avatarUrl);
        handleCloseModal();
    }

    return (
        <>
            <Input
                onChange={(name: string, value: any) => {
                    if (firstLettersNotEmpty(value)) return;
                    onChange(name, value);
                }}
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
            <div className={"choose-avatar-wrapper"}>
                <div onClick={handleOpenModal} className="choose-avatar-btn">
                    Choose Avatar
                </div>
                <div className={"user-avatar-wrapper"}>
                    <img src={editedAvatarUrl} className="user-avatar-img" alt="" />
                </div>
            </div>
            <AvatarPicker
                handleClose={handleCloseModal}
                isOpen={isAvatarPickerOpen}
                onSelectAvatar={onSelectAvatar}
                selectedAvatarUrl={editedAvatarUrl}
            />
        </>
    );
};

export default PersonalDetails;
