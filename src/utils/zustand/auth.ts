// zustandStore.js
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
    }
  )
);

export default useAuthStore;
// Exporting the type
