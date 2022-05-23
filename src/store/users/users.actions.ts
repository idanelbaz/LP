import { createAction } from '@reduxjs/toolkit';
import { UsersActionTypes } from "./users.actionTypes";
import { User, UserLoginReq } from './users.interface';

export interface LoginUserDetails {
  password: string,
  email: string
}

export class UsersActions {
  submitUserReq = createAction<User>(UsersActionTypes.SUBMIT_USER_REQ);

  submitUserRes = createAction<User>(UsersActionTypes.SUBMIT_USER_RES);

  loginUserReq = createAction<LoginUserDetails>(UsersActionTypes.LOGIN_USER_REQ);

  loginUserRes = createAction<UserLoginReq>(UsersActionTypes.LOGIN_USER_RES);

}

export const usersActions = new UsersActions();
