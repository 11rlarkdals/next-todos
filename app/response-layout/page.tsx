"use client";
import React from "react";

interface Props {}

const BasicUi: React.FC<Props> = ({}) => {
  return (
    <div className="max-w-[1920px]">
      <div className="max-w-[1024px] mx-auto  text-center ">
        <header className="h-[90px] bg-[#b3e5fc] content-center">
          awefawef
        </header>
        <menu className="h-[90px] bg-[#81d4fa] content-center">awefawef</menu>
        <div className="sm:flex">
          <div className=" h-[130px] bg-[#4fc3f7] sm:h-auto sm:w-[300px] lg:w-[400px] content-center">
            awefawef
          </div>
          <div className="w-full">
            <section className="h-[310px] bg-[#29b6f6] sm:h-[270px] lg:h-[200px] content-center">
              <div
                className="content-centern border-8 border-black m-12"
                style={{
                  height: "80px",
                  backgroundImage: "url(https://i.imgur.com/yUAdPHj.png)",
                  backgroundSize: "cover",
                }}
              ></div>
              awefawef
            </section>
            <div className="w-full lg:flex">
              <section className="h-[100px] bg-[#03a9f4] sm:h-[270px] lg:h-[340px] lg:w-[50%] content-center">
                <div
                  className="content-center border-8 border-black m-12"
                  style={{
                    height: "50%",
                    backgroundImage: "url(https://i.imgur.com/lvQZr1H.png)",
                    backgroundSize: "cover",
                  }}
                ></div>
                awefawef
              </section>
              <section className="hidden lg:block bg-cyan-500 lg:w-[50%] content-center">
                <div
                  className="content-center border-8 border-black m-12"
                  style={{
                    height: "50%",
                    backgroundImage: "url(https://i.imgur.com/lvQZr1H.png)",
                    backgroundSize: "cover",
                  }}
                ></div>
                awefawefawefawefawef
              </section>
            </div>
          </div>
        </div>
        <footer className=" h-[60px] bg-[#0288d1] content-center">
          awefawef
        </footer>
      </div>
    </div>
  );
};

export default BasicUi;
