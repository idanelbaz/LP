export interface CoreInterface {
  currentPage: Pages,
  appAlert?: AppAlert,
  isHeaderMenuOpen: boolean,
  isAppLoading: boolean
}

export enum Pages {
  LandingPage = "/",
  Signup = "/signup",
  Homepage = "/homepage",
  NotFound = "/not-found"
}

export enum InnerMainPages {
  Timeline = "Timeline",
  AddUserEvent = "AddUserEvent",
  UserEvent = "UserEvent"
}

export enum SignupSteps {
  PersonalDetails = "PersonalDetails",
  // Birthday = "Birthday",
  // Gender = "Gender",
  FamilyMembers = "FamilyMembers",
  CredentialsInfo = "CredentialsInfo"
}

export const signupStepsArray = Object.values(SignupSteps);

export interface AppAlert {
  type: AlertTypes,
  text: string
}

export enum AlertTypes {
  error = 'error',
  success = 'success'
}
