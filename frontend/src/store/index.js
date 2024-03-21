import { atom } from "recoil";

export const usernameAtom = atom({
  key: "usernameAtom",
  default: null,
});

export const reviewsAtom = atom({
  key: "reviewsAtom",
  default: [],
});
