import { atom } from "recoil";

export const usernameAtom = atom({
  key: "usernameAtom",
  default: null,
});
export const sortAtom = atom({
  key: "sortAtom",
  default: "overall",
});

export const reviewsAtom = atom({
  key: "reviewsAtom",
  default: [],
});

export const alreadyAddedReviewAtom = atom({
  key: "alreadyAddedReviewAtom",
  default: false,
});

export const addingReviewAtom = atom({
  key: "addingReviewAtom",
  default: false,
});

export const reviewIndexAtom = atom({
  key: "reviewIndexAtom",
  default: 0,
});

///////// admin

export const adminUserAtom = atom({
  key: "adminUserAtom",
  default: null,
});
