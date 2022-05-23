import { catchError, delay, filter, map, merge, mergeMap, Observable, of, pluck } from "rxjs";
import { Action } from '@reduxjs/toolkit';
import { UsersSelector, usersSelector } from "./users.selectors";
import { LoginUserDetails, usersActions, UsersActions } from "./users.actions";
import { UserLoginReq } from "./users.interface";
import { usersService } from "./users.service";
import { setIsAppLoading, updateAppAlert } from "../core/core.reducer";
import { AlertTypes, Pages } from "../core/core.interface";
import { updateCurrentUser, updateSelectedUser } from "./users.reducer";
import { coreActions } from "../core/core.actions";

export class UsersEffects {
  constructor(private effectUsersActions: UsersActions, private effectUsersSelector: UsersSelector) {
    console.log("UsersEffects constructor");
  }

  private onLoginUserReq(action$: Observable<Action>): Observable<Action> {
    return action$.pipe(
      filter(this.effectUsersActions.loginUserReq.match),
      pluck("payload"),
      mergeMap((userDetails: LoginUserDetails) => usersService.loginUser(userDetails)),
      catchError((err: Error, caught) => merge(of(err), caught)),
      map((registeredUserDetails: UserLoginReq | Error) => ((registeredUserDetails instanceof Error)
        ? updateAppAlert({ text: "Cannot login user", type: AlertTypes.error })
        : this.effectUsersActions.loginUserRes(registeredUserDetails))),
      // TODO: Remove on real server res
      delay(1200)
    );
  }

  private onLoginUserRes(action$: Observable<Action>): Observable<Action> {
    return action$.pipe(
      filter(this.effectUsersActions.loginUserRes.match),
      pluck("payload"),
      mergeMap(({ token, user }: UserLoginReq) => {
        localStorage.setItem("token", token)
        return [updateCurrentUser(user), updateSelectedUser(user._id),
          coreActions.setCurrentPage(Pages.Homepage), setIsAppLoading(false)];
      }),
    );
  }

  public allEffects: Array<any> = [
    this.onLoginUserReq.bind(this),
    this.onLoginUserRes.bind(this),
  ];
}

export const usersEffects = new UsersEffects(usersActions, usersSelector);
