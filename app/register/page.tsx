"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import instargramLogo from "../../public/instagramLogo.svg";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", {
        name,
        email,
        password,
        photoUrl,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" flex">
      <div className="w-[400px]  mt-[70px] rounded-lg ml-[100px] h-[620px] border-8">
        <div>
          <div className="text-gray-800 ">
            <input
              className="block mx-auto border p-2 rounded-md w-[300px] mt-5 bg-gray-100"
              type="text"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="photo"
            />
            <div className="text-white text-center mt-[150px] text-lg font-bold">
              User Image
            </div>
            <div
              className="rounded-full mx-auto content-center mt-[10px] border-white border-2"
              style={{
                width: "250px",
                height: "250px",
                backgroundImage: `url(${photoUrl})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="text-gray-800 bg-white p-2  w-[400px] mx-auto mt-[70px] rounded-lg h-[620px]">
        <Image
          src={instargramLogo}
          alt={"picture"}
          className="w-[200px] mx-auto my-[48px]"
        />
        <div className=" mx-auto w-[80px] my-10">Sign Up</div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[300px] mx-auto">
            <input
              className="mx-auto border p-2 rounded-md w-full bg-gray-100"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              className="block mx-auto border p-2 rounded-md w-full my-5 bg-gray-100"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="block mx-auto border p-2 rounded-md w-full bg-gray-100"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {/* <div className="flex ">
              <div
                className="rounded-full"
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundImage: `url(${photoUrl})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <input
                className="block mx-auto border p-2 rounded-md w-[300px] mt-5 bg-gray-100"
                type="text"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="photo"
              />
            </div> */}
            <button
              type="submit"
              className="mx-auto bg-[#6bb5f9] text-center rounded-lg py-[6px] my-[14px] font-bold text-sm text-white w-full"
            >
              Register
            </button>
            <div className=" flex items-center w-[300px] mx-auto">
              <div className="border-b h-[1px] w-full border-gray-300"></div>
              <div className="mx-4 text-gray-500 font-bold text-sm">OR</div>
              <div className="border-b h-[0.5px] w-full border-gray-300"></div>
            </div>
            <Link
              className="w-[270px] mx-auto text-center my-[31px] text-blue-800 text-lg font-bold"
              href={"/login"}
            >
              login?
            </Link>
          </div>
        </form>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
