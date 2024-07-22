import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../axios";
import { Logout } from "@mui/icons-material";


type User  = {
  _id: string | undefined,
  username: string,
  email: string,
  password: string,
  profilePicture: string,
  isAdmin: boolean,
  allCompanies: [],
  passCompanies: [],
  createdAt: Date,
  updatedAt: Date,
}

interface AuthContextType {
  user: User | null,
  login: (email: string, password: string) => void,
  logOut: () => void,
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)


export const useAuth  = () => {
  const context = useContext(AuthContext)
  if(context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
}



const AuthProvider = ({children}: {children : ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);


  const login = async (email: string, password: string) => {
    const response = await api.post("/auth/login", {
      email: email, password: password
    }).then((res) => setUser(res.data)).catch((error) => error)
  }

  const logOut = () => {
    setUser(null)
  }

  const contextValue = {
    user,
    login,
    logOut
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider