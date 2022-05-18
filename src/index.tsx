import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { epicMiddleware, store } from './store/store';
import { rootEffects } from './store/root/root.effects';
import { configService } from './store/config/config.service';
import { setConfigAction } from './store/config/config.reducer';

const container = document.getElementById('root');
if (container === null) throw new Error('Root container missing in index.html');
const root = ReactDOM.createRoot(container);

const initRender = (setStore: any) => root.render(
  <Provider store={setStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const setStore = store;
epicMiddleware.run(rootEffects);
configService.init()
  .then((config) => store.dispatch(setConfigAction(config)))
  .then(() => initRender(setStore));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
