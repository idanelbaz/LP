import { MenuItem, Select } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import { initFamilyMember } from "../../../../../store/users/users.initialState";
import { familyMember, familyRelation } from "../../../../../store/users/users.interface";
import { firstLettersNotEmpty } from "../../../../../utils/utils";
import DateInput from "../../../../UiComponents/DateInput/DateInput";
import Input from "../../../../UiComponents/Input/Input";
import AvatarPicker from "../../AvatarPicker/AvatarPicker";

interface AddFamilyMemberProps {
  onCancel: () => void,
  submitEditedMember: (user: familyMember) => void,
}

const AddFamilyMember: React.FC<AddFamilyMemberProps> =
  ({ onCancel, submitEditedMember }): JSX.Element => {
    const [isAvatarPickerOpen, setIsAvatarPickerOpen] = useState(false);
    const [editedFamilyMember, setEditedFamilyMember] = useState<familyMember>({ ...initFamilyMember });
    const isDisabledSave: boolean = editedFamilyMember.name === "";

    const handleSubmitFamilyMember = () => {
      submitEditedMember(editedFamilyMember)
    }

    const onChangeInputs = (memberField: string, inputValue: any) => {
      setEditedFamilyMember({ ...editedFamilyMember, [memberField]: inputValue });
    };

    console.log('editedFamilyMember.relation', editedFamilyMember.relation);


    const handleCancel = () => {
      onCancel();
    }

    const handleCloseModal = () => {
      setIsAvatarPickerOpen(false);
    }

    const handleOpenModal = () => {
      setIsAvatarPickerOpen(true);
    }

    const onSelectAvatar = (avatarUrl: string) => {
      onChangeInputs("avatarUrl", avatarUrl);
      handleCloseModal();
    }

    return (
      <div className="family-members__inputs-container">
        <Input
          placeholder="name"
          value={editedFamilyMember.name}
          onChange={(name: string, value: any) => {
            if (firstLettersNotEmpty(value)) return;
            onChangeInputs(name, value);
          }}
          field={"name"}
          type={"text"}
          isInfoBtn={false}
        />
        <Select
          value={editedFamilyMember.relation}
          onChange={(event) => onChangeInputs("relation", event.target.value)}
          // style={{ height: "2rem" }}
          // variant="standard"
          className="family-members__inputs-container__select"
        >
          {Object.values(familyRelation).map((reletion: familyRelation) => {
            return (
              <MenuItem key={reletion} value={reletion}>{reletion}</MenuItem>
            );
          })}
        </Select>
        <DateInput field="birthdate" onChange={onChangeInputs} value={editedFamilyMember.birthdate} label="Birth date" isTime={false} />
        <div className={"choose-avatar-wrapper"}>
          <div onClick={handleOpenModal} className="choose-avatar-btn">
            Choose Avatar
          </div>
          <div className={"user-avatar-wrapper"}>
            <img src={editedFamilyMember.avatarUrl} className="user-avatar-img" alt="" />
          </div>
        </div>
        <AvatarPicker
          handleClose={handleCloseModal}
          isOpen={isAvatarPickerOpen}
          onSelectAvatar={onSelectAvatar}
          selectedAvatarUrl={editedFamilyMember.avatarUrl}
        />
        <div className="family-members__inputs-container__save-container">
          <div className={classNames("save-btn", isDisabledSave && "disabled")} onClick={handleSubmitFamilyMember}>Save</div>
          <div className={"cancel-btn"} onClick={handleCancel}>Cancel</div>
        </div>
      </div>
    );
  };

export default AddFamilyMember;
