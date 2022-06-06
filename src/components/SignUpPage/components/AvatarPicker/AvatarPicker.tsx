import React from "react";
import classNames from "classnames";
import BananasProfileSvg from "../../../../style/images/profileIcons/bananas.svg";
import BatProfileSvg from "../../../../style/images/profileIcons/bat.svg";
import CatProfileSvg from "../../../../style/images/profileIcons/cat.svg";
import ChickenProfileSvg from "../../../../style/images/profileIcons/chicken.svg";
import ConeCreamProfileSvg from "../../../../style/images/profileIcons/cone-cream.svg";
import CowProfileSvg from "../../../../style/images/profileIcons/cow.svg";
import DiggerProfileSvg from "../../../../style/images/profileIcons/digger.svg";
import DonutsProfileSvg from "../../../../style/images/profileIcons/donuts.svg";
import FishProfileSvg from "../../../../style/images/profileIcons/fish.svg";
import FoxProfileSvg from "../../../../style/images/profileIcons/fox.svg";
import FrogProfileSvg from "../../../../style/images/profileIcons/frog.svg";
import GiraffeProfileSvg from "../../../../style/images/profileIcons/giraffe.svg";
import HamburgerProfileSvg from "../../../../style/images/profileIcons/hamburger.svg";
import JokerProfileSvg from "../../../../style/images/profileIcons/joker.svg";
import OctopusProfileSvg from "../../../../style/images/profileIcons/octopus.svg";
import OwlProfileSvg from "../../../../style/images/profileIcons/owl.svg";
import PenguinProfileSvg from "../../../../style/images/profileIcons/penguin.svg";
import RobotProfileSvg from "../../../../style/images/profileIcons/robot.svg";
import Smile1ProfileSvg from "../../../../style/images/profileIcons/smile1.svg";
import Smile2ProfileSvg from "../../../../style/images/profileIcons/smile2.svg";
import Smile3ProfileSvg from "../../../../style/images/profileIcons/smile3.svg";
import Smile4ProfileSvg from "../../../../style/images/profileIcons/smile4.svg";
import SunProfileSvg from "../../../../style/images/profileIcons/sun.svg";
import ButterflyProfileSvg from "../../../../style/images/profileIcons/butterfly.svg";
import { Dialog } from "@mui/material";
import "./AvatarPicker.scss";


interface AvatarPickerProps {
    selectedAvatarUrl: string,
    onSelectAvatar: (avatarUrl: string) => void,
    handleClose: (isClose: boolean) => void,
    isOpen: boolean,
}

const avatars = [
    BananasProfileSvg,
    BatProfileSvg,
    CatProfileSvg,
    ChickenProfileSvg,
    ConeCreamProfileSvg,
    CowProfileSvg,
    DiggerProfileSvg,
    DonutsProfileSvg,
    FishProfileSvg,
    FoxProfileSvg,
    FrogProfileSvg,
    GiraffeProfileSvg,
    HamburgerProfileSvg,
    JokerProfileSvg,
    OctopusProfileSvg,
    OwlProfileSvg,
    PenguinProfileSvg,
    RobotProfileSvg,
    Smile1ProfileSvg,
    Smile2ProfileSvg,
    Smile3ProfileSvg,
    Smile4ProfileSvg,
    SunProfileSvg,
    ButterflyProfileSvg,
]

const AvatarPicker: React.FC<AvatarPickerProps> =
    ({ handleClose, isOpen, onSelectAvatar, selectedAvatarUrl }): JSX.Element => {


        return (
            <Dialog onClose={handleClose} open={isOpen}>
                <div className="avatar-picker-container">
                    {avatars.map(avatarUrl =>
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
