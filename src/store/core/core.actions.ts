import { createAction } from '@reduxjs/toolkit';
import { CoreActionTypes } from "./core.actionTypes";
import { Pages } from "./core.interface";

export class CoreActions {
  setCurrentPage = createAction<Pages>(CoreActionTypes.SET_CURRENT_PAGE);

  goToTimeline = createAction(CoreActionTypes.GO_TO_TIMELINE);
}

export const coreActions = new CoreActions();
