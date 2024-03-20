import { atom } from "recoil";

export const usernameAtom = atom({
    key: 'usernameAtom',
    default: null
})

export const departmentsAtom = atom({
    key: 'departmentsAtom',
    default: []
})