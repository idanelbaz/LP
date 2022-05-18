import { UsersSelector, usersSelector } from "./users.selectors";
import { usersActions, UsersActions } from "./users.actions";

export class UsersEffects {
  constructor(private effectUsersActions: UsersActions, private effectUsersSelector: UsersSelector) {
    console.log("UsersEffects constructor");
  }

  public allEffects: Array<any> = [];
}

export const usersEffects = new UsersEffects(usersActions, usersSelector);
