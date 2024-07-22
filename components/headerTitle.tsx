import React from "react";

interface Props {
  userName: string | undefined;
}

const HeaderTitle: React.FC<Props> = ({ userName }) => {
  return (
    <div className="flex items-center">
      <div className="bg-[url(./todo/co.png)] bg-cover h-[50px] w-[50px]"></div>
      <div className="font-extrabold m-2 text-xl text-rose-700">Dama</div>
      <div className="font-thin">{userName}</div>
    </div>
  );
};

export default HeaderTitle;
