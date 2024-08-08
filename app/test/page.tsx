"use client";
import React from "react";

interface Props {}

const test: React.FC<Props> = ({}) => {
  return (
    <div className="items-center">
      <div className="flex h-[750px]">
        <div className="bg-gray-200 w-[70px] text-gray-950">
          <div className="mx-[10px] my-10">
            <div className="my-10">icon</div>
            <div className="my-10">icon</div>
            <div className="my-10">icon</div>
            <div className="mt-96">icon</div>
            <div className="my-10">icon</div>
            <div className="my-10">icon</div>
          </div>
        </div>
        <div className="bg-white w-[400px] text-gray-950">
          <div>친구</div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default test;
