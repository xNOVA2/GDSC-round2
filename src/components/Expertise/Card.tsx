import { CardProps } from "@/Types/Type";
import { ReactElement } from "react";



export const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="cursor-pointer hover:bg-slate-100 flex flex-col justify-between p-2  border rounded shadow-sm my-4  h-[350px] w-[280px] lg:w-[400px] lg:h-[250px]">
      <div>
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          {icon}
        </div>
        <h6 className="mb-4 font-semibold leading-5 text-2xl">{title}</h6>
        <p className="mb-3 text-sm text-gray-900">{description}</p>
      </div>
      <a href="/" className="">Learn more</a>
    </div>
  );
};
