/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { createSelector, Selector } from 'reselect';
import { RootStateInterface } from '../root/rootState.interface';
import { User, UsersInterface } from "./users.interface";
import { usersReducerKey } from './users.reducer';

export class UsersSelector {
  usersReducerSelector: Selector<RootStateInterface, UsersInterface> = (state: RootStateInterface): UsersInterface => state[usersReducerKey];

  currentUserSelector = createSelector(
    [this.usersReducerSelector],
    (state: UsersInterface) => {
      return state.currentUser;
    }
  );

  getSelectedUserIdSelector = createSelector(
    [this.usersReducerSelector],
    (state: UsersInterface) => {
      return state.selectedUserId;
    }
  );

  getIsUserConnected = createSelector(
    [this.currentUserSelector],
    (user: User | undefined) => {
      return Boolean(user);
    }
  );

  getCurrentUserFamilyMembersSelector = createSelector(
    [this.currentUserSelector],
    (user: User | undefined) => {
      return user?.familyMembers;
    }
  );
}

export const usersSelector = new UsersSelector();
