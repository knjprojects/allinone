// sidebarStore.js
"use client"; // Because we will be needing client-side localStorage functionality

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SidebarState = {
  side: string;
  changeSide: (side: string) => void;
  setInitialSide: (side: string) => void;
};

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      side: "Bio",
      changeSide: (side: string) => set(() => ({ side })),
      setInitialSide: (side: string) => set(() => ({ side })),
    }),
    {
      name: "sidebarStore", // Name for the persisted state
      getStorage: () => localStorage, // Use localStorage to persist the state
    }
  )
);
