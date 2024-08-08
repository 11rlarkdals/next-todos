import Link from "next/link";
import React from "react";

interface Props {}

const DropDown: React.FC<Props> = ({}) => {
  return (
    <div className="text-black bg-white p-4 w-[8rem] rounded-lg">
      <Link href={"/login"} className="">
        logout
      </Link>
      <div></div>
      <Link href={"/userinfo"}>User Info</Link>
    </div>
  );
};

export default DropDown;
