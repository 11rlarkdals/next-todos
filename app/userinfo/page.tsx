"use client";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { UserType } from "../page";

interface Props {}

const userinfo: React.FC<Props> = ({}) => {
  const [userData, setUserDate] = useState<UserType | undefined>();
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
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const photoUrl = "https://i.imgur.com/mmmwnbF.png";
  return (
    <div className="border flex justify-center h-[779px]">
      <div className="border w-[20%]">
        <div>사이드바</div>
      </div>
      <div className="border w-[70%]">
        <div className=" border p-10 ">
          <div>이름:{userData?.name}</div>
          <div>번호</div>
          <div>나이</div>
          <div>이메일:{userData?.email}</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
          <div>awefawef</div>
        </div>
      </div>

      <div
        className="rounded-full border p-[5%]"
        style={{
          width: "70px",
          height: "70px",
          backgroundImage: `url(${userData?.photoUrl})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div></div>
    </div>
  );
};

export default userinfo;
