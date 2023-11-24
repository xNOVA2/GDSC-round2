import { Card } from "./Card";
import { Laptop2, Pen, PenSquare } from "lucide-react";
import Projects from "../Projects/Projects";

const Expertise = () => {
  return (
    <>
      <div className=" w-full mt-36  lg:mt-44 flex flex-col items-center">
        
        <div className="p-4 rounded-lg lg:flex lg:justify-center lg:gap-4 ">
          <Card
            description="Welcome to my world of pixels, where design meets purpose and every click tells a story. As a passionate UI designer, I bring creativity and functionality together to craft visually stunning and user-friendly interfaces. "
            title="UI Designer"
            icon={<Pen />}
          />

          <Card
            title="Product Design"
            description="Welcome to my world of pixels, where design meets purpose and every click tells a story. As a passionate UI designer, I bring creativity and functionality together to craft visually stunning and user-friendly interfaces. "
            icon={<PenSquare />}
          />

          <Card
            title="Full Stack Dev"
            description="Welcome to my world of pixels, where design meets purpose and every click tells a story. As a passionate UI designer, I bring creativity and functionality together to craft visually stunning and user-friendly interfaces."
            icon={<Laptop2 />}
          />
        </div>
      </div>
    </>
  );
};

export default Expertise;
