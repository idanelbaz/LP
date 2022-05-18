import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { coreInitState } from './core.initialState';
import { AppAlert, CoreInterface, SignupSteps } from './core.interface';
import { coreActions } from "./core.actions";
/* eslint no-param-reassign: "error" */

export const coreReducerKey = 'core';

export const CoreReducer = createSlice({
  name: coreReducerKey,
  initialState: coreInitState,
  reducers: {
    updateCurrentSignupStep(state: CoreInterface, action: PayloadAction<SignupSteps>) {
      state.currentSignupStep = action.payload;
    },
    updateAppAlert(state: CoreInterface, action: PayloadAction<AppAlert>) {
      state.appAlert = action.payload;
    },
    setIsHeaderMenuOpen(state: CoreInterface, action: PayloadAction<boolean>) {
      state.isHeaderMenuOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(coreActions.setCurrentPage, (state: CoreInterface, action) => {
      state.currentPage = action.payload;
    });
  },
});

export const {
  updateCurrentSignupStep,
  updateAppAlert, setIsHeaderMenuOpen
} = CoreReducer.actions;
