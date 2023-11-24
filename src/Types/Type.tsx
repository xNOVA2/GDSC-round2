import { ReactElement } from "react";



export interface CardProps {
    title: string;
    description: string;
    icon: ReactElement;
  }

  export interface ProjectCardProps extends CardProps  {
    Image:string,
}