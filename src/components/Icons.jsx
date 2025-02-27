import { CiHome } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";

export const Icons = ({ focus, mockdata }) => {
  return (
    <div
      className={`flex flex-row w-[100%] justify-between items-end px-[48px] ${
        mockdata.isDay ? "text-[#D1D5DB]" : "text-[#4B5563]"
      }`}>
      <button className={`${focus}`}>
        <CiHome className="w-[32px] h-[32px]" />
      </button>
      <button className={`${focus}`}>
        <IoLocationOutline className="w-[32px] h-[32px]" />
      </button>
      <button className={`${focus}`}>
        <IoIosHeartEmpty className="w-[32px] h-[32px]" />
      </button>
      <button className={`${focus}`}>
        <CiUser className="w-[32px] h-[32px]" />
      </button>
    </div>
  );
};
