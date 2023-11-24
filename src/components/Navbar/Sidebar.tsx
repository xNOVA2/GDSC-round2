import React from 'react'
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Sidebar() {
  return (
  <>
  
  <Sheet >
      
      <SheetTrigger  className="block lg:hidden"><Menu /></SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetDescription>
            <ul className="flex flex-col justify-center items-center h-screen gap-5  ">
            <li className="font-bold text-md cursor-pointer text-3xl ">Home</li>
            <li className="font-bold text-md cursor-pointer text-3xl">Service</li>
            <li className="font-bold text-md cursor-pointer text-3xl">Experience</li>
            <li className="font-bold text-md cursor-pointer text-3xl">Projects</li>
          </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </>
  )
}
