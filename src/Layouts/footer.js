import React from "react";
import icon from "../assets/icon.png";

function footer() {
  const Product = ["Overview", "Feature", "Solution", "Tutorials", "Pricing "];
  const Company = ["About Us", "Carrers", "Press", "News", "Media Kit"];
  const Resources = [
    "Blog",
    "NewsLetters",
    "Events",
    "Help center",
    "Tutorials",
  ];
  const Social = ["Twitter", "LindeIn", "FaceBook", "GitHub", "AngleList"];
  const Legal = ["Terms", "Privacy", "Cookies", "Licenses", "Settings"];

  const Heading = (props) => {
    return (
      <ul className="flex flex-col justify-start items-start gap-4">
        {props.arr.map((itm, index) => {
          return <li key={index}>{itm}</li>;
        })}
      </ul>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-16 bg-gray-200 py-8 px-6 text-start lg:flex-row justify-around items-start lg:gap-10">
        <div className="flex flex-col justify-start items-start gap-2">
          <img src={icon} alt="" className="h-14 w-22 object-fill" />
          <p className="lg:max-w-sm text-lg font-medium text-stone-500 mt-5">
            Design amazing digital experience that create more happy in the
            world
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-flow-col gap-12">
          <div className="">
            <p className="text-gray-500 text-md font-sm mb-5">Product</p>
            <Heading arr={Product} />
          </div>
          <div>
            <p className="text-gray-500 text-md font-sm mb-5">Company</p>
            <Heading arr={Company} />
          </div>
          <div>
            <p className="text-gray-500 text-md font-sm mb-5">Resourse</p>
            <Heading arr={Resources} />
          </div>
          <div>
            <p className="text-gray-500 text-md font-sm mb-5">Social</p>
            <Heading arr={Social} />
          </div>
          <div>
            <p className="text-gray-500 text-md font-sm mb-5">Legal</p>
            <Heading arr={Legal} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:px-10 md:justify-around items-center py-10 ">
        <p className="text-gray-500 font-medium">
          @ 2077 Untitled UI All Right reserved
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default footer;
