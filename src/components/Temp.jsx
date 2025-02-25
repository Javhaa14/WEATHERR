export const Temp = ({ className, temp, baidal, bo }) => {
  return (
    <div
      className={`inline-flex flex-col items-start pl-[48px] pt-[470px] absolute`}>
      <p
        className={`h-[197px] text-[144px] font-[800] bg-gradient-to-b  bg-clip-text text-transparent ${className}`}>
        {temp}°
      </p>
      <p className={`text-[24px] font-[800] ${bo}`}>{baidal}</p>
    </div>
  );
};
