import React from "react";
import classNames from "classnames";
import { Dialog } from "@mui/material";
import "./AvatarPicker.scss";
import { importAll } from "../../../../utils/utils";


interface AvatarPickerProps {
    selectedAvatarUrl: string,
    onSelectAvatar: (avatarUrl: string) => void,
    handleClose: (isClose: boolean) => void,
    isOpen: boolean,
}

const avatars = importAll(require.context('../../../../style/images/profileIcons/', false, /\.(png|jpe?g|svg)$/));

const AvatarPicker: React.FC<AvatarPickerProps> =
    ({ handleClose, isOpen, onSelectAvatar, selectedAvatarUrl }): JSX.Element => {

        return (
            <Dialog onClose={handleClose} open={isOpen}>
                <div className="avatar-picker-container">
                    {avatars.map((avatarUrl: any) =>
                        <div
                            key={avatarUrl}
                            className={classNames("avatar-item-wrapper",
                                (selectedAvatarUrl === avatarUrl) && "selected-avatar")}
                            onClick={() => onSelectAvatar(avatarUrl)}
                        >
                            <img src={avatarUrl} className="avatar-item" alt="" />
                        </div>
                    )}
                </div>
            </Dialog>
        );
    };

export default AvatarPicker;
