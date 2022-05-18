import { CoreSelector, coreSelector } from "./core.selectors";
import { CoreActions, coreActions } from "./core.actions";

export class CoreEffects {
  constructor(private effectCoreActions: CoreActions, private effectCoreSelector: CoreSelector) {
    console.log("CoreEffects constructor");
  }

  public allEffects: Array<any> = [];
}

export const coreEffects = new CoreEffects(coreActions, coreSelector);
