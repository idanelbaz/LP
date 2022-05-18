import { GenderTypes, SubscriptionTypes, UsersInterface } from './users.interface';

export const usersInitState: UsersInterface = { 
  currentUser: undefined,
  editedUser: {
    birthdate: new Date(),
    email: "",
    gender: GenderTypes.Female,
    name: "",
    _id: "",
    events: [],
    register: false,
    familyMembers: [],
    subscriptionType: SubscriptionTypes.Regular
  }
};
