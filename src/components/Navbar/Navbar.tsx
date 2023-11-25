import { Button } from "../ui/button";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 w-full h-20  flex justify-between items-center px-4  ">


      <div>
        <h1 className="text-2xl font-bold font-sans  text-blue-600">Ali Osaid.</h1>
      </div>

      <ul className="hidden lg:flex lg:justify-between lg:gap-3 ">
        <li className="font-semibold text-md cursor-pointer hover:text-blue-600 ">Home</li>
        <li className="font-semibold text-md cursor-pointer hover:text-blue-600">Service</li>
        <li className="font-semibold text-md cursor-pointer hover:text-blue-600">Experience</li>
        <li className="font-semibold text-md cursor-pointer hover:text-blue-600 ">Projects</li>
      </ul>


      <Sidebar />
    </nav>
  );
}
