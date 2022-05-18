import { combineEpics, StateObservable } from 'redux-observable';
import { Action } from 'redux';
import { catchError } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Dependencies } from './rootState.interface';
import { usersEffects } from "../users/users.effects";
import { coreEffects } from "../core/core.effects";
import { configEffects } from '../config/config.effects';

export const rootEffects = (action$: Observable<Action>, store$: StateObservable<void>, dependencies: Dependencies) => combineEpics(
  ...usersEffects.allEffects,
  ...coreEffects.allEffects,
  ...configEffects.allEffects
)(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.log(error);
    return source;
  })
);
