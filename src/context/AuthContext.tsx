import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../axios";
import { Logout } from "@mui/icons-material";
import { User } from "../typs";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  regist: (usernama: string, email: string, passwrod: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const userData = JSON.parse(localStorage.getItem("user") as string);

  useEffect(() => {
    if (user === null && userData) {
      setUser(userData);
      return;
    }
    
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = async (email: string, password: string) => {
    const response = await api
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => setUser(res.data))
      .catch((error) => error);
  };

  const regist = (username: string, email: string, password: string) => {
    const response = api
      .post(`/auth/register`, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user")
  };

  const contextValue = {
    user,
    login,
    regist,
    logOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
