export interface UsersInterface {
  currentUser?: User,
  selectedUserId: string
}

export interface User {
  _id:string,
  name: string,
  password?: string,
  birthdate: Date,
  gender: GenderTypes,
  email: string
  events: Array<string>,
  familyMembers: Array<familyMember>,
  subscriptionType: SubscriptionTypes,
  avatarUrl: string
}

export enum SubscriptionTypes {
  Regular = "Regular",
  Premium = "Premium",
  SuperPremium = "SuperPremium"
}

export enum GenderTypes {
  Male = "Male",
  Female = "Female",
  Other = "Other"
}

export interface familyMember {
  name: string,
  relation: familyRelation,
  events: Array<string>,
  _id: string,
  birthdate: Date
}

export enum familyRelation {
  Sibling = "Sibling",
  Parent = "Parent",
  Child = "Child",
  Spouse = "Spouse",
  Pet = "Pet"
}

export const userColorDic:Record<string, string> = {
  0: "#f10ce0",
  1: "#0ce7f1",
  2: "#eef10c",
  3: "#f1800c",
  4: "#f10c81",
  5: "#190cf1",
  6: "#f10c0c",
};

export interface UserLoginReq {
  user: User,
  token: string 
}
