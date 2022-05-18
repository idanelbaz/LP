import { v4 as uuidv4 } from "uuid";

export const firstLettersNotEmpty = (input: string): boolean => {
  return /^\s/.test(input);
};

export const validateEmail = (email:string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const uuid = () => uuidv4();

export const preloadImages = (appImages: Array<string>): void => {
  appImages.forEach((imagePath) => {
    const img = new Image();
    img.src = imagePath;
  });
};
