export const BG = ({ mockdata }) => {
  return (
    <div
      className={`flex flex-col w-[398px] h-[504px] rounded-[42px] bg-[(var(--Cool-Gray-Gradient-light, linear-gradient(180deg, #F9FAFB 0%, rgba(249, 250, 251, 0.00) 100%))] `}>
      <div className="flex flex-row justify-between w-[100%]">
        <div className="flex flex-col pl-[40px] pt-[56px]">
          <p className="text-[18px] text-[#9CA3AF]">{mockdata.date}</p>
          <p
            className={`text-[48px] font-[800] ${
              mockdata.isDay ? "text-[#111827]" : "text-[#FFF]"
            }`}>
            {mockdata.city}
          </p>
        </div>
        <svg
          className="mt-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none">
          <path
            d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
            stroke="#4B5563"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="16"
            cy="13"
            r="2"
            stroke="#4B5563"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="relative flex justify-center items-center pt-[196px]">
        <img
          src={`${mockdata.isDay ? "icon.png" : "sar.png"}`}
          className="absolute"></img>
        <img
          src={`${mockdata.isDay ? "shadow.png" : "suuder.png"}`}
          className="absolute"></img>
      </div>
    </div>
  );
};
