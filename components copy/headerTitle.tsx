import React from "react";

interface Props {
  userName: string | undefined;
}

const HeaderTitle: React.FC<Props> = ({ userName }) => {
  return (
    <div className="flex items-center ">
      <div className="font-extrabold mr-2 text-xl text-rose-700">Dama</div>
      <div className="font-thin">{userName}</div>
    </div>
  );
};

export default HeaderTitle;
