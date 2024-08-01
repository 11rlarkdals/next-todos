"use client";

import { useReducer, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import instargramLogo from "../../public/instagramLogo.svg";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-gray-800 bg-white text-center pb-96 max-h-[530px] w-[400px] mx-auto rounded-lg mt-[130px] ">
      <form onSubmit={handleSubmit} className="pb-10  w-[300px] mx-auto">
        <Image
          src={instargramLogo}
          alt={"picture"}
          className="w-[200px] mx-auto my-[48px] inline-block"
        />
        <input
          className="block  mx-auto w-full p-3 bg-gray-100 rounded-md text-[15px]"
          type=" email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="block mx-auto w-full p-3 my-5 bg-gray-100  rounded-md text-[15px]"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="submit"
          className="block mx-auto bg-[#6bb5f9] py-[6px] rounded-lg w-full text-[12 px] text-white font-bold my-[14px]"
        >
          Login
        </button>
        <div className=" flex items-center mx-auto mb-20">
          <div className="border-b h-[1px] w-full border-gray-300"></div>
          <div className="mx-4 text-gray-500 font-bold text-sm">OR</div>
          <div className="border-b h-[0.5px] w-full border-gray-300"></div>
        </div>

        <Link
          className="w-[270px] mx-auto text-center  text-blue-800 text-sm font-bold"
          href={"/register"}
        >
          Sign Up
        </Link>
        <div className="w-[270px] mx-auto text-center my-[31px] text-blue-800 text-xs">
          Forgot password?
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
