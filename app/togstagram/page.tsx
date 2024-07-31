"use client";
import React from "react";
import instagramLogo from "../../public/instagramLogo.svg";
import Image from "next/image";

interface Props {}

const togstagram: React.FC<Props> = ({}) => {
  return (
    <div className="bg-white h-screen pt-[130px] text-gray-800">
      <div className="wrap w-[350px] mx-auto border rounded-lg">
        <div className="">
          <Image
            src={instagramLogo}
            alt={"picture"}
            className="w-[180px] mx-auto my-[48px]"
          />
        </div>
        <form action="" className="mx-auto w-[270px] flex flex-col gap-[6px]">
          <input
            type="text"
            className="w-full h-[38px] border rounded-sm bg-gray-100"
          ></input>
          <input
            type="text"
            className="w-full h-[38px] border rounded-sm bg-gray-100"
          ></input>
          <div className="bg-[#6bb5f9] text-center rounded-lg py-[6px] my-[14px] font-bold text-sm text-white">
            Login
          </div>
        </form>

        <div>
          <div className=" flex items-center w-[270px] mx-auto">
            <div className="border-b h-[1px] w-full border-gray-300"></div>
            <div className="mx-4 text-gray-500 font-bold text-sm">OR</div>
            <div className="border-b h-[0.5px] w-full border-gray-300"></div>
          </div>
          <div className=" w-[270px] mx-auto mt-[41px] flex">
            <div className="mx-auto text-center flex">
              <div
                className="mt-[3px]"
                style={{
                  width: "17px",
                  height: "17px",
                  backgroundImage: "url(https://i.imgur.com/6iV8pyM.png)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="ml-[5px] content-center text-blue-800 font-bold">
                Log in with Facebook
              </div>
            </div>
          </div>
          <div className="w-[270px] mx-auto text-center my-[31px] text-blue-800 text-xs">
            Forgot password?
          </div>
        </div>
      </div>
    </div>
  );
};

export default togstagram;
