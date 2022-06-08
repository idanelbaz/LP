import { CoreSelector, coreSelector } from "./core.selectors";
import { CoreActions, coreActions } from "./core.actions";
import { catchError, delay, EMPTY, filter, map, merge, mergeMap, Observable, of, pluck } from "rxjs";
import { Action } from '@reduxjs/toolkit';
import { history } from '../store';
import { Pages } from './core.interface';
import { setIsAppLoading, setIsHeaderMenuOpen } from "./core.reducer";
import { usersActions } from "../users/users.actions";
import { ofType } from "redux-observable";
import { UsersActionTypes } from "../users/users.actionTypes";

export class CoreEffects {
  constructor(private effectCoreActions: CoreActions, private effectCoreSelector: CoreSelector) {
    console.log("CoreEffects constructor");
  }

  private onSetCurrentPage(action$: Observable<Action>): Observable<Action> {
    return action$.pipe(
      filter(this.effectCoreActions.setCurrentPage.match),
      pluck("payload"),
      mergeMap((selectedPage: Pages) => {
        history.push(selectedPage)
        return [setIsHeaderMenuOpen(false)];
      }),
    );
  }

  private onLoadingApp(action$: Observable<Action>): Observable<Action> {
    return action$.pipe(
      ofType(UsersActionTypes.SUBMIT_USER_REQ, UsersActionTypes.LOGIN_USER_REQ),
      map(() => setIsAppLoading(true)),
    );
  }

  public allEffects: Array<any> = [
    this.onSetCurrentPage.bind(this),
    this.onLoadingApp.bind(this)
  ];
}

export const coreEffects = new CoreEffects(coreActions, coreSelector);
