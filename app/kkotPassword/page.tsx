"use client";
import React from "react";
import kkotPassword from "../../public/kkotPassword.png";
import Image from "next/image";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  return (
    <div className="flex">
      <Image
        src={kkotPassword}
        alt={"picture"}
        className="w-[550px] h-[500px] bg-cover"
      ></Image>
      <div className="border w-[425px] bg-white text-gray-950 ml-[10px]">
        <div className="text-[25px] text-center my-[10px]">kakao</div>
        <div className="border p-10">
          <div className="text-[19px]">
            <div>카카오계정의</div>
            <div>비밀번호를 재설정합니다.</div>
          </div>
          <div className="my-[10px] text-[12px] mb-[35px]">
            <div>비밀번호를 재설정할</div>
            <div>카카오계정의 이메일 또는 전화번호를 입력해 주세요.</div>
          </div>
          <div className="">
            <div className="text-[10px] mb-[5px]">카카오계정</div>
            <div className="text-[12px]">이메일 또는 전화번호</div>
            <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
          </div>
          <div className="border p-[15px] text-center mt-[90px] text-[12px] rounded-md bg-slate-100">
            다음
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
