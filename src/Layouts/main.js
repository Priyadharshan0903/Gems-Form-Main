import React from "react";
import Form from "../components/FromInput";
// import landingImg from "../assets/landing-img.png";
import landingImg from "../assets/icon2.png";

function main() {
  return (
    <div className="flex justify-start items-center md:gap-10 lg:justify-between">
      <div className="hidden lg:block">
        <img
          src={landingImg}
          alt="landingImg"
          className="min-w-full h-calc object-cover"
        />
      </div>
      <div className="flex-1 md:px-20 md:min-w-[600px] lg:max-w-[1500px] h-screen md:mt-5 lg:mt-0">
        <Form />
      </div>
    </div>
  );
}

export default main;
