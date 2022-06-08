import React, { useState } from 'react';
import { familyMember } from '../../../../store/users/users.interface';
import { uuid } from '../../../../utils/utils';
import AddFamilyMember from './components/AddFamilyMember';
import './FamilyMembers.scss';


interface FamilyMembersProps {
  value: Array<familyMember>,
  field: string,
  onChange: (key: string, value: Array<familyMember>) => void,
}

const FamilyMembers: React.FC<FamilyMembersProps> = ({ field, onChange, value }): JSX.Element => {
  const [isAddOn, setIsAddOn] = useState(false);

  const onAddNewMember = () => {
    setIsAddOn(true);
  };

  const submitEditedMember = (editedFamilyMember: familyMember) => {
    setIsAddOn(false);
    onChange(field, [...value, { ...editedFamilyMember, _id: uuid() }]);
  };

  const onCancel = () => {
    setIsAddOn(false);
  };

  const removeMember = (memberId: string) => {
    onChange(field, value.filter((member) => member._id !== memberId));
  };

  return (
    <>
      {!isAddOn
        && (
          <>
            <div className="family-members__exist-members">
              {value.map((member: familyMember) => (
                <div className="family-members__exist-members__member" key={member._id}>
                  <span className="family-members__exist-members__member__name">{member.name}</span>
                  <span className="family-members__exist-members__member__reletion">{member.relation}</span>
                  <span
                    role="presentation"
                    onClick={() => removeMember(member._id)}
                    className="family-members__exist-members__member__remove-btn"
                  >Remove
                  </span>
                </div>
              ))}
            </div>
            <div className="family-members__inputs-container__save-container" role="presentation" onClick={onAddNewMember}>
              <div className="save-btn">
                Add +
              </div>
            </div>
          </>
        )}
      {isAddOn
        && (
          <AddFamilyMember onCancel={onCancel} submitEditedMember={submitEditedMember} />
        )}
    </>
  );
};

export default FamilyMembers;
