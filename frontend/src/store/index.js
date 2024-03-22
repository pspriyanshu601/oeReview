import { atom } from "recoil";

export const usernameAtom = atom({
  key: "usernameAtom",
  default: null,
});

export const reviewsAtom = atom({
  key: "reviewsAtom",
  default: [],
});

export const sortAtom = atom({
  key: "sortAtom",
  default: 'overall'
})

// cheched the name of sort atom to filter atom
export const filterAtom = atom({
  key: "filterAtom",
  default: null,
});

export const alreadyAddedReviewAtom = atom({
  key: "alreadyAddedReviewAtom",
  default: false,
});
