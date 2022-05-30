import { CoreInterface, Pages } from './core.interface';

export const coreInitState: CoreInterface = {
  currentPage: Pages.LandingPage,
  isHeaderMenuOpen: false,
  isAppLoading: false
};
