import React from "react";

interface Props {}

const DropDown: React.FC<Props> = ({}) => {
  return (
    <div className="text-black bg-white p-4 w-[8rem] rounded-lg">
      <div className="">login</div>
      <div className="">logout</div>
      <div className="">sign up</div>
    </div>
  );
};

export default DropDown;
