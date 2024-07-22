import React from "react";
import HeaderTitle from "./headerTitle";
import { MdDoNotDisturb } from "react-icons/md";
import Button from "./button";
import LogoutButton from "./logoutButton";

interface Props {
  username: string | undefined;
  photoUrl: string | undefined;
}

const Header: React.FC<Props> = ({ username, photoUrl }) => {
  console.log({ photoUrl });

  return (
    <div className="border-b">
      <div className="mx-[20px]  flex justify-between items-center  h-[80px]">
        <HeaderTitle userName={username} />
        {username ? (
          <div className="flex items-center">
            <LogoutButton />
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundImage: `url(${photoUrl})`,
                backgroundSize: "cover",
              }}
              className=""
            ></div>
          </div>
        ) : (
          <div className="flex">
            <Button key={1} name="Sign in" />
            <Button key={2} name="Sign up" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
