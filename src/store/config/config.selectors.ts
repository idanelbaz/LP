import { createSelector, Selector } from 'reselect';
import { RootStateInterface } from '../root/rootState.interface';
import { configReducerKey } from "./config.reducer";
import { ConfigInterface } from "./config.interface";

export class ConfigSelector {
  configReducerSelector: Selector<RootStateInterface, ConfigInterface> = (state: RootStateInterface): ConfigInterface => state[configReducerKey];

  isShowModeSelector = createSelector(
    this.configReducerSelector,
    (state:ConfigInterface) => {
      return state.isShowMode;
    }
  );
}

export const configSelector = new ConfigSelector();
