import { usersReducerKey } from "../users/users.reducer";
import { UsersInterface } from "../users/users.interface";
import { ConfigInterface } from "../config/config.interface";
import { configReducerKey } from "../config/config.reducer";
import { coreReducerKey } from "../core/core.reducer";
import { CoreInterface } from "../core/core.interface";

export interface RootStateInterface {
  [usersReducerKey]: UsersInterface,
  [configReducerKey]: ConfigInterface,
  [coreReducerKey]: CoreInterface,
}

export interface Dependencies {

}
