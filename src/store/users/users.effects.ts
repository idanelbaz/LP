import { catchError, delay, filter, map, merge, mergeMap, Observable, of, pluck } from "rxjs";
import { Action } from '@reduxjs/toolkit';
import { UsersSelector, usersSelector } from "./users.selectors";
import { LoginUserDetails, usersActions, UsersActions } from "./users.actions";
import { User, UserLoginReq } from "./users.interface";
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
      delay(1500)
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

  private onSubmitUserReq(action$: Observable<Action>): Observable<Action> {
    return action$.pipe(
      filter(this.effectUsersActions.submitUserReq.match),
      pluck("payload"),
      mergeMap((editedUser: User) => usersService.submitUser(editedUser)),
      catchError((err: Error, caught) => merge(of(err), caught)),
      map((registeredUser: User | Error) => ((registeredUser instanceof Error)
        ? updateAppAlert({ text: "Cannot add user", type: AlertTypes.error })
        : this.effectUsersActions.submitUserRes(registeredUser))),
      // TODO: Remove on real server res
      delay(1500)
    );
  }

  private onSubmitUserRes(action$: Observable<Action>): Observable<Action> {
    return action$.pipe(
      filter(this.effectUsersActions.submitUserRes.match),
      pluck("payload"),
      mergeMap((registeredUser: User) => {
        return [updateCurrentUser(registeredUser), updateSelectedUser(registeredUser._id),
        coreActions.setCurrentPage(Pages.Homepage), setIsAppLoading(false)];
      }),
    );
  }

  public allEffects: Array<any> = [
    this.onLoginUserReq.bind(this),
    this.onLoginUserRes.bind(this),
    this.onSubmitUserReq.bind(this),
    this.onSubmitUserRes.bind(this),
  ];
}

export const usersEffects = new UsersEffects(usersActions, usersSelector);
