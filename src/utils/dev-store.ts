"use client";
import { create } from "zustand";

type DevStoreState = {
  sidebar: boolean;
  sidebarToggle:()=>void
};

const useDevStore = create<DevStoreState>()((set, get) => ({
  themcolors: {
    primary: "#212B34",
    secondary: "#00ADB4",
    accent: "#01FFF5",
    text: "#FFFFFF",
  },

  sidebar: true,

  sidebarToggle: () => {
    set((state) => ({ sidebar: !state.sidebar }));
  },
}));

export default useDevStore;
