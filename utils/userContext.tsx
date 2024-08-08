"use client";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

type UserType = {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
} | null;

interface Props {}

type UserContext = {
  photoUrl: any;
  user: UserType;
  fatchUser: () => Promise<void>;
};

export const UserContext = createContext<UserContext | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      console.log(response.data);
      // console.log(response.data)
      // if (!response.data.id) {
      // }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
