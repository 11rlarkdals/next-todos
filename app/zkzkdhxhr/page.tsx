"use client";
import React from "react";
import kakaotalkLogin from "../../public/kakaotalkLogin.png";
import Image from "next/image";
import { MdOutlineQrCode } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import Link from "next/link";

interface Props {}

const kkot: React.FC<Props> = ({}) => {
  return (
    <div className=" mx-auto flex">
      <Image src={kakaotalkLogin} alt={"picture"}></Image>
      <div className="bg-[#ffdc00] w-[390px] rounded-xl">
        <div className="mt-[70px]">
          <div
            className="rounded-full mx-auto"
            style={{
              width: "126px",
              height: "120px",
              backgroundImage: "url(https://i.imgur.com/6QfanVx.png)",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="w-[240px] mx-auto mt-[34px] text-gray-400 ">
          <div>
            <div className="border p-[10px] text-[15px] bg-slate-50">
              카카오톡계정 (이메일 또는 전화번호)
            </div>
            <div className="border p-[10px] text-[15px] bg-slate-50">
              비밀번호
            </div>
            <div className="border p-[8px] text-center mt-[10px] bg-slate-50 text-[15px]">
              로그인
            </div>
          </div>
          <div className=" flex items-center  mx-auto mt-[20px]">
            <div className="border-b h-[1px] w-full border-gray-300"></div>
            <div className="mx-3 text-gray-500  text-xs">OR</div>
            <div className="border-b h-[0.5px] w-full border-gray-300 brightness-100"></div>
          </div>
          <div className="">
            <div className="border mt-[21px] text-gray-900 text-center  font-semibold text-[15px] p-[8px] bg-slate-50 flex pl-[25%]">
              <MdOutlineQrCode className="h-[23px] w-[23px] mr-[5px] ob`" />
              QR 코드로 로그인
            </div>
          </div>
          <div className="mt-[15px] flex">
            <div className="bg-slate-50 w-[15px] h-[15px] rounded-full border"></div>
            <div className="text-[12px] mx-[5px]">자동로그인</div>
            <BsExclamationCircle className="text-gray-200" />
          </div>
          <div className="flex mt-[110px] justify-center text-[12px] text-gray-500">
            <div>카카오계정 찾기</div>
            <div className="mx-[5px] text-gray-300">|</div>
            <div>비밀번호 재설정</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kkot;
