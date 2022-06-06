import { GenderTypes, SubscriptionTypes, User, UsersInterface } from './users.interface';
import ProfileSvg from "../../style/images/profile.svg";

export const usersInitState: UsersInterface = { 
  currentUser: undefined,
  selectedUserId: ""
};

export const editedUserInit: User = {
  birthdate: new Date(),
  email: "",
  gender: GenderTypes.Female,
  name: "",
  _id: "",
  events: [],
  familyMembers: [],
  subscriptionType: SubscriptionTypes.Regular,
  avatarUrl: ProfileSvg
}
