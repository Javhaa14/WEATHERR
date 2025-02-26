export const Back = ({ className, children }) => {
  return (
    <div
      className={`flex flex-col  gap-[240px] w-[414px] h-[828px] bg-[] bg-opacity-80 rounded-[48px] absolute z-40 backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
};
