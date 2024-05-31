import { atom } from "recoil";

export const valueAtom = atom<number>({
    key: "value",
    default: 0,
})