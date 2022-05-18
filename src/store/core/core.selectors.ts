/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { createSelector, Selector } from 'reselect';
import { RootStateInterface } from '../root/rootState.interface';
import { CoreInterface, signupStepsArray } from "./core.interface";
import { coreReducerKey } from './core.reducer';

export class CoreSelector {
  coreReducerSelector: Selector<RootStateInterface, CoreInterface> = (state: RootStateInterface): CoreInterface => state[coreReducerKey];

  currentPageSelector = createSelector(
    [this.coreReducerSelector],
    (state: CoreInterface) => {
      return state.currentPage;
    }
  );

  currentSignupStepSelector = createSelector(
    [this.coreReducerSelector],
    (state: CoreInterface) => {
      return state.currentSignupStep;
    }
  );

  isHeaderMenuOpenSelector = createSelector(
    [this.coreReducerSelector],
    (state: CoreInterface) => {
      return state.isHeaderMenuOpen;
    }
  );

  getCurrentSignupStepIndex = createSelector(
    [this.currentSignupStepSelector],
    (signupStep) => signupStepsArray.findIndex((step) => step === signupStep)
  ); 
}

export const coreSelector = new CoreSelector();
