"use client";
import React, { useContext, useEffect, useState } from "react";
import HeaderTitle from "./headerTitle";
import { MdDoNotDisturb } from "react-icons/md";
import Button from "./button";
import LogoutButton from "./logoutButton";
import DropDown from "./dropDown";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "@/utils/userContext";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const router = useRouter();

  const userData = useContext(UserContext);
  useEffect(() => {}, []);

  console.log({});

  return (
    <div className="border-b ">
      <div className=" mx-[100px] flex justify-between items-center h-[80px]">
        <HeaderTitle userName={userData?.name?.name} />
        <div className="relative ">
          <div
            onClick={() => {
              setIsMenuShow(!isMenuShow);
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: "70px",
                height: "70px",
                backgroundImage: `url(${
                  userData?.photoUrl
                    ? userData?.photoUrl
                    : "https://i.imgur.com/PRlyidO.png"
                })`,
                backgroundSize: "cover",
              }}
            />
          </div>
          <div
            className={`${!isMenuShow && "hidden"} absolute right-0 top-[75px]`}
          >
            <DropDown />
          </div>
        </div>
        {/* ) : (
          <div className="flex">
            <Button key={1} name="Sign in" />
            <Button key={2} name="Sign up" />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
