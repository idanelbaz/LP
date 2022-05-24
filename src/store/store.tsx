import { Action, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './root/root.reducer';
import { loggerService } from '../logger/logger.service';
import { createBrowserHistory } from 'history';

export const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

const logger = () => (next: any) => (action: Action) => {
  loggerService.debug(action);
  return next(action);
};

export function configureStore() {
  return createStore(
    rootReducer(),
    process.env.REACT_APP_ENV_TYPE === 'prod' ? applyMiddleware(logger, epicMiddleware)
      : composeWithDevTools(applyMiddleware(logger, epicMiddleware)),
  );
}

export const store = configureStore();
