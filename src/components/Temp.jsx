export const Temp = ({ mockdata }) => {
  return (
    <div
      className={`inline-flex flex-col items-start pl-[48px] pt-[470px] absolute`}>
      <p
        className={`h-[197px] text-[144px] font-[800] bg-gradient-to-b  bg-clip-text text-transparent ${
          mockdata.isDay
            ? "bg-linear-to-b from-[#111827] to-[#6B7280]"
            : "bg-linear-to-b from-[#F9FAFB] to-[#000000]"
        }`}>
        {mockdata.temp}°
      </p>
      <p
        className={`text-[24px] font-[800] ${
          mockdata.isDay ? "text-[#FF8E27]" : "text-[#777CCE]"
        }`}>
        {mockdata.baidal}
      </p>
    </div>
  );
};
