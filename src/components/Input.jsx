import { IoIosSearch } from "react-icons/io";

export const Input = ({ value, change }) => {
  return (
    <div className="flex w-fit py-[16px] px-[24px] items-center gap-4 rounded-[48px] bg-white shadow-lg absolute z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none">
        <g opacity="0.2">
          <path
            d="M31.5098 28.51H29.9298L29.3698 27.97C31.3298 25.69 32.5098 22.73 32.5098 19.51C32.5098 12.33 26.6898 6.51001 19.5098 6.51001C12.3298 6.51001 6.50977 12.33 6.50977 19.51C6.50977 26.69 12.3298 32.51 19.5098 32.51C22.7298 32.51 25.6898 31.33 27.9698 29.37L28.5098 29.93V31.51L38.5098 41.49L41.4898 38.51L31.5098 28.51ZM19.5098 28.51C14.5298 28.51 10.5098 24.49 10.5098 19.51C10.5098 14.53 14.5298 10.51 19.5098 10.51C24.4898 10.51 28.5098 14.53 28.5098 19.51C28.5098 24.49 24.4898 28.51 19.5098 28.51Z"
            fill="black"
          />
        </g>
      </svg>
      <input
        value={value}
        onChange={change}
        className=" min-w-[320px] w-[567px] text-[32px] font-[700] text-black focus-visible:outline-white color-black placeholder:opacity-[0.2]"
        type="text"
        placeholder="Search"></input>
    </div>
  );
};
