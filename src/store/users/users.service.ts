/* eslint-disable class-methods-use-this */
import { uuid } from '../../utils/utils';
import { axiosCalls } from '../axios';
import { GenderTypes, SubscriptionTypes, User } from './users.interface';
import { LoginUserDetails } from "./users.actions";

export class UsersService {

  submitUser = (user: User): Promise<User> => {
    return Promise.resolve({
      ...user,
      _id: uuid(),
      register: true
    });
  };

  loginUser = (userDetails: LoginUserDetails): Promise<User> => {
    return Promise.resolve({
      ...userDetails,
      _id: uuid(),
      register: true,
      familyMembers: [],
      gender: GenderTypes.Male,
      birthdate: new Date(),
      events: [],
      married: false,
      subscriptionType: SubscriptionTypes.Regular,
      name: "Logined user"
    });
  };

}

export const usersService = new UsersService();
