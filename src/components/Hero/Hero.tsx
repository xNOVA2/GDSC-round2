import myPic from "../../../public/Mypic.jpeg";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center justify-center mt-20 lg:mt-0 lg:flex-row  lg:justify-evenly lg:h-[700px]">
        <div className="rounded-full lg:overflow-visible overflow-hidden w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
          <img src={myPic} className=" object-cover   " alt="My Picture" />
        </div>
        <div className="lg:ml-8">
          <h1 className="mt-9 text-3xl font-semibold text-center lg:text-start">
            <span className="text-blue-600">Full Stack </span> <br />
            Developer
          </h1>
          <p className="mt-2 text-center px-10 lg:px-0 pt-2 font-semibold lg:text-start lg:w-[500px]">
            Hi, I'm Ali Osaid! 👋 <br /> I'm a full-stack developer who loves turning
            ideas into user-friendly digital magic. From making things look great
            on the front to building strong foundations in the back, I've got your
            tech needs covered. Let's create something awesome together!
          </p>
          <Button variant={"ghost"} className="text-white bg-blue-600  mt-4 text-md px-9 hover:bg-blue-400 hover:text-white font-semibold hidden lg:block">
            About me
          </Button>
        </div>
        <div className="flex  gap-2 mt-9 lg:hidden">
          <Button variant={"default"} className="bg-blue-600 hover:bg-blue-400 text-white font-semibold ">
            About me
          </Button>
        </div>
      </div>
    </div>
  );
}
