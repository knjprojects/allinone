// zustandStore.js
"use client"; // Because we will be needing client-side localStorage functionality

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AuthState = {
  userData: any;
  setUser: (user: any) => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userData: null,
      setUser: (user) => set({ userData: user }),
    }),
    {
      name: "authStore", // Name for the persisted state
      getStorage: () => localStorage, // Use localStorage to persist the state
    }
  )
);

export default useAuthStore;
// Exporting the type
