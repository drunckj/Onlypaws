import {create} from "zustand";
export const useStore = create((set) => ({
    mode:true,
    setMode: () => set(state => ({ mode: !state.mode })),
  }));