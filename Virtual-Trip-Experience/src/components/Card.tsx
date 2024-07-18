import Image from "next/image";
import { caveat } from "./font";
import {motion} from 'framer-motion'
import HoverButton from "@/components/Hover"
import { createContext, useState } from "react";

type CardProp = {
  data: {
    name: string;
    location: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    description: string;
    img:string
  },
  onClicked:(name:string,cord:{lat:number,lng:number})=>void

};




export default function Card({ data , onClicked}: CardProp) {

  const [cityName, setCity] = useState<string | null>(null)
  const CityContext = createContext(null)


  return (
    <div>
      <div className=" m-1 ml-1 p-1 text-center">
        <div  className=" rounded shadow-lg  p-1 flex" onClick={()=>onClicked(data.name,data.coordinates)}>
         <motion.div  whileHover={{ scale: 0.8 ,cursor:"pointer"}} whileTap={{scale:0.6}} initial={{
        opacity: 0,
        x: -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: 1.5 
        }
      }}
      viewport={{ once: true }}  className="  w-1/2 flex justify-center" > 
         <Image
            src={data.img}
            alt="Sunset in the mountains"
            width={400}
            height={400}
            className="sm:h-full sm:w-4/5 h-3/4 w-30"
          />
           </motion.div>
           

          <div className="  m-1 p-1 w-1/2 flex flex-col justify-center gap-3 ">
           
          <div className="font-bold text-3xl  text-white">{data.name}</div>
          <div className=" text-gray-400 " > <p className={` text-xl lineHeight ${caveat.className}`}>{data.description}</p></div>
          <div className=" flex justify-center" onClick={()=>onClicked(data.name,data.coordinates)}><HoverButton/>  </div>

          </div>

        </div>

      </div>

    </div>
  );
}
