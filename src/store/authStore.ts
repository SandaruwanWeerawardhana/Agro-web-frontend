import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole = "farmer" | "buyer" | "supplier";

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  register: (data: RegisterData) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (
        email: string,
        _password: string,
        role: UserRole
      ): Promise<boolean> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockUser: User = {
          id: "1",
          email,
          name: email.split("@")[0],
          role,
        };

        set({ user: mockUser, isAuthenticated: true });
        return true;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      register: async (data: RegisterData): Promise<boolean> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockUser: User = {
          id: "1",
          email: data.email,
          name: data.name,
          role: data.role,
        };

        set({ user: mockUser, isAuthenticated: true });
        return true;
      },
    }),
    {
      name: "agro_user",
    }
  )
);
