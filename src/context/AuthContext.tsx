import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type UserRole = 'farmer' | 'buyer' | 'supplier';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  register: (data: RegisterData) => Promise<boolean>;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('agro_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email: string, _password: string, role: UserRole): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful login
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role,
    };

    setUser(mockUser);
    localStorage.setItem('agro_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('agro_user');
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful registration
    const mockUser: User = {
      id: '1',
      email: data.email,
      name: data.name,
      role: data.role,
    };

    setUser(mockUser);
    localStorage.setItem('agro_user', JSON.stringify(mockUser));
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
