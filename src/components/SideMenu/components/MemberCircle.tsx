import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { RootStateInterface } from "../../../store/root/rootState.interface";
import { familyMember, User, userColorDic } from "../../../store/users/users.interface";

interface IMemberCircleProps {
  user: User | familyMember,
  selectedUser: string | undefined,
  selectUser: (userId: string) => void,
  idx?: number
}

const MemberCircle: React.FC<IMemberCircleProps> = ({ user, selectedUser, selectUser, idx }): JSX.Element => {

  const getUserColor = () => userColorDic[idx || 0];

  const style = { backgroundColor: idx !== undefined ? getUserColor() : "cadetblue" };

  return (
    <div
      role="presentation"
      onClick={() => selectUser(user._id)} 
      className={classNames("side-menu__item-container", (selectedUser === user._id) && "selected-user")}
    >
      <div className="side-menu__item-container__item current-user-logo" style={style}>
        <span>{user.name[0].toUpperCase()}</span>
      </div>   
    </div>
  );
};

const mapStateToProps = (state:RootStateInterface, props:IMemberCircleProps):IMemberCircleProps => {
  return { ...props };
};

export default connect(mapStateToProps)(MemberCircle);
