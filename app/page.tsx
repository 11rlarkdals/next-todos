"use client";

import Header from "@/components/header";
import Todo from "@/components/todo";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type UserType = {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
};

export default function Home() {
  const [userData, setUserDate] = useState<UserType | undefined>();
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDate(response.data);
        console.log(response.data);
        // console.log(response.data)
        // if (!response.data.id) {
        // }
      } catch (error) {
        router.push("/login");
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData && (
        <Header username={userData?.name} photoUrl={userData?.photoUrl} />
      )}
    </div>
  );
}
