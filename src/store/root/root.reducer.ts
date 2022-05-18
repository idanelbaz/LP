import { combineReducers } from 'redux';
import { UsersReducer, usersReducerKey } from "../users/users.reducer";
import { ConfigReducer, configReducerKey } from "../config/config.reducer";
import { CoreReducer, coreReducerKey } from "../core/core.reducer";

export const rootReducer = () => combineReducers(
  {
    [usersReducerKey]: UsersReducer.reducer,
    [configReducerKey]: ConfigReducer.reducer,
    [coreReducerKey]: CoreReducer.reducer
  }
);
