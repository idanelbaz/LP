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
    updateEditedUser(state: UsersInterface, action: PayloadAction<Partial<User>>) {
      state.editedUser = { ...state.editedUser, ...action.payload };
    },
    updateCurrentUser(state: UsersInterface, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
  }
});

export const { updateEditedUser, updateCurrentUser } = UsersReducer.actions;
