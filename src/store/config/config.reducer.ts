/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfigInterface } from './config.interface';
import { configInitState } from './config.initState';
/* eslint no-param-reassign: "error" */

export const configReducerKey = 'config';

export const ConfigReducer = createSlice({
  name: configReducerKey,
  initialState: configInitState,
  reducers: {
    setConfigAction(state: any, action: PayloadAction<any>) {
      Object.keys(action.payload).forEach((configItem: string) => {
        state[configItem] = action.payload[configItem];
      });
      state = action.payload;
    },
  },
});

export const { setConfigAction } = ConfigReducer.actions;
