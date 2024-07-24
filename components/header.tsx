"use client";
import React, { useState } from "react";
import HeaderTitle from "./headerTitle";
import { MdDoNotDisturb } from "react-icons/md";
import Button from "./button";
import LogoutButton from "./logoutButton";
import DropDown from "./dropDown";

interface Props {
  username: string | undefined;
  photoUrl: string | undefined;
}

const Header: React.FC<Props> = ({ username, photoUrl }) => {
  console.log({ photoUrl });
  const [isMenuShow, setIsMenuShow] = useState(true);

  return (
    <div className="border-b ">
      <div className=" mx-[100px] flex justify-between items-center h-[80px]">
        <HeaderTitle userName={username} />
        <div className="relative ">
          <div
            onClick={() => {
              setIsMenuShow(!isMenuShow);
            }}
            className="rounded-full"
            style={{
              width: "70px",
              height: "70px",
              backgroundImage: `url(${photoUrl})`,
              backgroundSize: "cover",
            }}
          ></div>
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
