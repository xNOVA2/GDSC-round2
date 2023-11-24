import { Github } from "lucide-react";
import ProjectCard from "./Project-Card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (

    <>
    

     <div className="px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
     <div className="flex justify-between mt-10 my-10">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <Button className="px-9 py-6 bg-blue-600 hover:bg-blue-400"><a href="https://github.com/xNOVA2"> View All</a></Button>
    </div>
      <div className="grid gap-5 lg:grid-cols-3 max-w-sm mx-auto lg:max-w-full">
        
        <ProjectCard
          Image={"https://i.pinimg.com/564x/11/77/90/11779099517b0d1a7fb2e7340a9ce392.jpg"}
          description="a space where innovation meets convenience, and shopping becomes an immersive experience. My journey as a developer led me to craft a distinctive e-commerce platform that goes beyond transactions to create a seamless and enjoyable online shopping journey"
          icon={<Github />}
          title="E-Commerce Store"
        />

          <ProjectCard
          Image={"https://i.pinimg.com/564x/15/68/7c/15687c7a3bc1e158843fcd767a2062b0.jpg"}
          description="a space where innovation meets convenience, and shopping becomes an immersive experience. My journey as a developer led me to craft a distinctive e-commerce platform that goes beyond transactions to create a seamless and enjoyable online shopping journey"
          icon={<Github />}
          title="Blog Website"
        />

          <ProjectCard
          Image={"https://i.pinimg.com/564x/c7/ff/46/c7ff46680d82746ffeadff18693985e2.jpg"}
          description="a space where innovation meets convenience, and shopping becomes an immersive experience. My journey as a developer led me to craft a distinctive e-commerce platform that goes beyond transactions to create a seamless and enjoyable online shopping journey"
          icon={<Github />}
          title="Resturant Website"
        />

      </div>
    </div>
    </>
   
  );
};

export default Projects;
