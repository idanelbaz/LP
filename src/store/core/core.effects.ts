import { CoreSelector, coreSelector } from "./core.selectors";
import { CoreActions, coreActions } from "./core.actions";
import { catchError, delay, EMPTY, filter, map, merge, mergeMap, Observable, of, pluck } from "rxjs";
import { Action } from '@reduxjs/toolkit';
import { history } from '../store';
import { Pages } from './core.interface';

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
        return EMPTY;
      }),
    );
  }

  public allEffects: Array<any> = [
    this.onSetCurrentPage.bind(this),
  ];
}

export const coreEffects = new CoreEffects(coreActions, coreSelector);
