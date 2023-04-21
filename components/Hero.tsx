import React from "react";

function Hero() {
  return (
    <div className="container mx-auto md:h-[32rem] md:w-[68rem] my-2 ">
      <div className="flex flex-col md:grid md:gap-4  md:grid-flow-row-dense md:grid-cols-3 ">
        <div
          className=" h-[24rem] w-full mb-4 rounded-3xl  md:h-[32rem] md:col-span-2 md:mb-0"
          style={{
            background: "linear-gradient(90deg, #e3ffe7 1%, #d9e7ff 100%)",
          }}
        ></div>

        <div className="bg-yellow-400 h-[28rem] w-full   md:h-[32rem] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default Hero;
