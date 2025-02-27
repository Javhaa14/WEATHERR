"use client";
import Image from "next/image";
import { Elipse } from "@/components/Elipse";
import { Back } from "@/components/Back";
import { BG } from "@/components/BG";
import { Temp } from "@/components/Temp";
import { Icons } from "@/components/Icons";
import { Input } from "@/components/Input";
import { useState } from "react";
import { Dropdown } from "@/components/Dropdown";
export default function Home() {
  let mockdata = [
    {
      city: "Tokyo",
      isDay: true,
      date: "September 10, 2025",
      baidal: "Sunny",
      temp: "24",
    },
    {
      city: "Tokyo",
      isDay: false,
      date: "September 10, 2025",
      baidal: "Rainy",
      temp: "-4",
    },
  ];
  let toirogs = [
    "size-[340px] absolute opacity-[0.1]",

    "size-[540px] absolute  opacity-[0.1]",

    "size-[940px] absolute opacity-[0.08]",

    "size-[1340px] absolute opacity-[0.06]",

    "size-[1740px] absolute opacity-[0.04]",
  ];
  // const [inputvalue, setInputvalue] = useState("");
  // const Uurchlugduhuyd = (event) => {
  //   setInputvalue(event.target.value);
  //   console.log(event.target.value);
  // };
  // const findcity = Citys.find();
  // function haih() {
  //   for (i = 0; i < Citys.length; i++) {
  //     if(Citys[i][0]==inputvalue){

  //     }
  //   }
  // }
  // const [data, Setdata] = useState([]);
  // const { City, date, temp, baidal, isDay } = data;
  const [data, Setdata] = useState(
    "https://api.weatherapi.com/v1/forecast.json?key=c54db69bc7dc4466bf415506241712&q="
  );
  const adata = fetch("").then((response) => {
    Setdata(response.data);
  });
  console.log(data, "data");
  return (
    <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden">
      <div className="flex w-screen h-screen absolute p-[40px]">
        <Input></Input>
        <Dropdown></Dropdown>
        {/* value={inputvalue} change={Uurchlugduhuyd} */}
      </div>
      <div className="flex justify-center items-center bg-[#F3F4F6] w-[50%] h-screen rounded-[0px 50px 0px 0px] relative">
        <img
          src="nar.png"
          className="absolute
          z-20
          pr-[400px]
          pb-[800px]"></img>

        <Back className={"bg-[#FFFFFF]"}>
          <BG
            mockdata={mockdata[0]}
            City={"Ulaanbaatar"}
            date={"September 10, 2025"}></BG>
          <Temp mockdata={mockdata[0]} temp={"26"} baidal={"Sunny"}></Temp>
          <Icons
            mockdata={mockdata[0]}
            focus={"focus:text-[#111827] text-[#D1D5DB]"}></Icons>
        </Back>
      </div>
      <div className="flex flex-col gap-[118px] w-[50%] h-screen bg-[#F3F4F6] justify-center items-center relative">
        <div className="flex  bg-[#0F141E]  w-[100%] h-[50%]  rounded-bl-[44px] relative"></div>
        <div className="flex absolute w-[100%] ml-[70px] h-[140px] bg-[#0F141E] "></div>
        <div className="flex  bg-[#0F141E] w-[100%] h-[50%]  rounded-tl-[44px] relative"></div>
        <img
          src="Sarr.png"
          className="absolute
          z-20
          pl-[400px]
          pt-[800px]
          "></img>
        <Back className={"bg-[#111827]"}>
          <BG
            mockdata={mockdata[1]}
            City={"Ulaanbaatar"}
            date={"September 10, 2025"}></BG>
          <Temp mockdata={mockdata[1]} temp={"-6"} baidal={"Clear"}></Temp>
          <Icons
            mockdata={mockdata[1]}
            focus={"focus:text-[#F9FAFB] text-[#4B5563]"}></Icons>
        </Back>
      </div>
      <div className="w-[140px] h-[140px] bg-[#F3F4F6] rounded-full absolute z-20 flex justify-center items-center text-center">
        {
          <svg
            className="pr-[8px]"
            xmlns="http://www.w3.org/2000/svg"
            width="43px"
            height=""
            viewBox="0 0 43 86"
            fill="none">
            <path
              d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z"
              fill="#111111"
            />
          </svg>
        }
        <svg
          className="pl-[8px]"
          xmlns="http://www.w3.org/2000/svg"
          width="43px"
          height=""
          viewBox="0 0 44 86"
          fill="none">
          <path
            d="M40.7442 32.882L27.1599 7.58993C24.6554 2.91778 19.7591 0 14.43 0H0V7.16486H0.00510914C2.66726 7.16486 5.11563 8.62166 6.36732 10.9572L19.9469 36.2543C21.0827 38.3633 21.647 40.679 21.647 42.9999C21.647 45.3211 21.0827 47.6368 19.9469 49.7454L6.36732 75.0423C5.11563 77.3783 2.66726 78.8345 0.00510914 78.8345H0V85.9999H14.43C19.7591 85.9999 24.6554 83.0821 27.1599 78.41L40.7442 53.1177C42.4388 49.9526 43.2889 46.4785 43.2889 42.9999C43.2889 39.5211 42.4388 36.0475 40.7442 32.882Z"
            fill="#111111"
          />
        </svg>
      </div>
      {toirogs.map((toirog) => {
        return <Elipse className={toirog} key={toirog} />;
      })}
    </div>
  );
}
