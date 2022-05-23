import { Pages, SignupSteps, CoreInterface } from './core.interface';

export const coreInitState: CoreInterface = {
  currentPage: Pages.LandingPage,
  currentSignupStep: SignupSteps.Name,
  isHeaderMenuOpen: false,
  isAppLoading: false
};
