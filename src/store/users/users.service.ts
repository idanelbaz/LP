/* eslint-disable class-methods-use-this */
import { uuid } from '../../utils/utils';
import { axiosCalls } from '../axios';
import { GenderTypes, SubscriptionTypes, User, UserLoginReq } from './users.interface';
import { LoginUserDetails } from "./users.actions";

export class UsersService {

  submitUser = (user: User): Promise<User> => {
    const signedUser = { ...user }
    delete signedUser.password;
    return Promise.resolve({
      ...signedUser,
      _id: uuid(),
      register: true
    });
  };

  loginUser = (userDetails: LoginUserDetails): Promise<UserLoginReq> => {
    return Promise.resolve({
      user: {
        ...userDetails,
        _id: uuid(),
        familyMembers: [],
        gender: GenderTypes.Female,
        birthdate: new Date(),
        events: [],
        subscriptionType: SubscriptionTypes.Regular,
        name: "Logined user",
        avatarUrl: ''
      },
      token: "dfdshjkffs"
    });
  };

}

export const usersService = new UsersService();
