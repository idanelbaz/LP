/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { createSelector, Selector } from 'reselect';
import { RootStateInterface } from '../root/rootState.interface';
import { CoreInterface } from "./core.interface";
import { coreReducerKey } from './core.reducer';

export class CoreSelector {
  coreReducerSelector: Selector<RootStateInterface, CoreInterface> = (state: RootStateInterface): CoreInterface => state[coreReducerKey];

  currentPageSelector = createSelector(
    [this.coreReducerSelector],
    (state: CoreInterface) => {
      return state.currentPage;
    }
  );

  isHeaderMenuOpenSelector = createSelector(
    [this.coreReducerSelector],
    (state: CoreInterface) => {
      return state.isHeaderMenuOpen;
    }
  );

  isAppLoadingSelector = createSelector(
    [this.coreReducerSelector],
    (state: CoreInterface) => {
      return state.isAppLoading;
    }
  );
}

export const coreSelector = new CoreSelector();
