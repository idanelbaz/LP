import { v4 as uuidv4 } from "uuid";
import validator from 'validator';

export const firstLettersNotEmpty = (input: string): boolean => {
  return /^\s/.test(input);
};

export const uuid = () => uuidv4();

export const preloadImages = (appImages: Array<string>): void => {
  appImages.forEach((imagePath) => {
    const img = new Image();
    img.src = imagePath;
  });
};

export const validatePassword = (password: string): boolean => {
  return !!(validator.isStrongPassword(password, {
    minLength: 8, minLowercase: 1,
    minUppercase: 1, minNumbers: 1, minSymbols: 1
  }))
};

export const validateEmail = (email: string): boolean => {
  return !!validator.isEmail(email);
};

export const validateNickname = (nickname: string): boolean => {
  return !!nickname.length;
};
