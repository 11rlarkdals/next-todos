"use client";
import React from "react";
import Image from "next/image";
import Kkot from "../../public/kkot.png";

interface Props {}

const kkot: React.FC<Props> = ({}) => {
  return (
    <div className="mx-auto flex">
      <Image src={Kkot} alt={"picture"} className="max-w-[580px]" />
      <div className="w-[580px] bg-white text-gray-950 ml-5">
        <div className="text-center text-[35px] mt-[7px]">kakao</div>
        <div className="border w-[540px] mx-auto p-14 mt-6">
          <div className="text-[27px]">
            <div>카카오계정을 찾을 방법을</div>
            <div>선택해 주세요.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kkot;
