/* eslint-disable no-underscore-dangle */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersInitState } from './users.initialState';
import { User, UsersInterface } from './users.interface';
/* eslint no-param-reassign: "error" */

export const usersReducerKey = 'users';

export const UsersReducer = createSlice({
  name: usersReducerKey,
  initialState: usersInitState,
  reducers: {
    updateCurrentUser(state: UsersInterface, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
    updateSelectedUser(state: UsersInterface, action: PayloadAction<string>) {
      state.selectedUserId = action.payload;
    },
  }
});

export const { updateCurrentUser, updateSelectedUser } = UsersReducer.actions;
