"use client";
import React from "react";

interface Props {}

const test: React.FC<Props> = ({}) => {
  return (
    <div>
      <div className="flex h-[750px]">
        <div className="bg-gray-300 w-[70px] ">
          <div className="mx-[10px] my-10">
            <div className="my-10">icon</div>
            <div className="my-10">icon</div>
            <div className="my-10">icon</div>
            <div className="mt-96">icon</div>
            <div className="my-10">icon</div>
            <div className="my-10">icon</div>
          </div>
        </div>
        <div className="bg-gray-100 w-[400px] text-gray-950">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default test;
