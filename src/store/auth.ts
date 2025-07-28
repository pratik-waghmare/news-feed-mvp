import { create } from "zustand";

type AuthState = {
  user: { id: string; name: string } | null;
  login: (user: AuthState["user"]) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: { id: "uid1", name: "Pratik" },
  login: (user: AuthState["user"]) => {
    set({ user });
  },
  logout: () => {},
}));
