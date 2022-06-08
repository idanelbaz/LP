import React, { useState } from 'react';
import { familyMember } from '../../../../store/users/users.interface';
import { uuid } from '../../../../utils/utils';
import AddFamilyMember from './components/AddFamilyMember/AddFamilyMember';
import FamilyMemberItem from './components/FamilyMemberItem/FamilyMemberItem';
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
                <FamilyMemberItem member={member} removeMember={removeMember} key={member._id} />
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
