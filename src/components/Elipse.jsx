export const Elipse = ({ className, opacity }) => {
  return (
    <div
      className={`flex w-[0px] h-[0px] rounded-full border-[1px] border-solid border-[#FFF] opacity-[${opacity}] ${className}`}></div>
  );
};
