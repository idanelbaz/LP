import React from "react";
import { familyMember } from "../../../../../../store/users/users.interface";
import RemoveSvg from "../../../../../../style/images/remove.svg";
import './FamilyMemberItem.scss';


interface FamilyMemberItemProps {
    member: familyMember,
    removeMember: (memberId: string) => void,
}

const FamilyMemberItem: React.FC<FamilyMemberItemProps> =
    ({ member, removeMember }): JSX.Element => {
        return (
            <div className="family-member-item-wrapper">
                <div className="family-member-item-wrapper__avatar-wrapper">
                    <img
                        alt=""
                        src={member.avatarUrl}
                        className="family-member-item-wrapper__avatar-wrapper__avatar-img"
                    />
                </div>
                <span className="family-member-item-wrapper__name">{member.name}</span>
                <span className="family-member-item-wrapper__reletion">{member.relation}</span>
                <img
                    onClick={() => removeMember(member._id)}
                    alt=""
                    src={RemoveSvg}
                    className="family-member-item-wrapper__remove-btn"
                />
            </div>
        );
    };

export default FamilyMemberItem;
