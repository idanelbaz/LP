import { GenderTypes, SubscriptionTypes, UsersInterface } from './users.interface';

export const usersInitState: UsersInterface = { 
  currentUser: undefined,
  selectedUserId: ""
};

export const editedUserInit = {
  birthdate: new Date(),
  email: "",
  gender: GenderTypes.Female,
  name: "",
  _id: "",
  events: [],
  familyMembers: [],
  subscriptionType: SubscriptionTypes.Regular
}
