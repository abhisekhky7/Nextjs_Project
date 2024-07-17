import Image from "next/image";
import Link from "next/link";
import { caveat } from "./font";
import {AnimatePresence, motion} from 'framer-motion'
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

// https://artsandculture.google.com/streetview/simatai-great-wall/5AEOqt5xTeyRjQ?
// sv_lng=117.27212726124365&sv_lat=40.66601815256303&sv_h=154.95650055603693&sv_p=-20.362875544400865&sv_pid=TvdRmceBRCwAAARBl7Tqow&sv_z=1



export default function Card({ data , onClicked}: CardProp) {

  const [cityName, setCity] = useState<string | null>(null)
  const CityContext = createContext(null)


  return (
    <div>
      <div className="myborder m-1 ml-1 p-1 text-center">
        <div  className=" rounded shadow-lg myborder p-1 flex" onClick={()=>onClicked(data.name,data.coordinates)}>
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
      viewport={{ once: true }}  className="myborder  w-1/2 flex justify-center" > 
         <Image
            src={data.img}
            alt="Sunset in the mountains"
            width={400}
            height={400}
          />
           </motion.div>
           

          <div className=" myborder m-1 p-1 w-1/2 flex flex-col justify-center gap-3 ">
           
          <div className="font-bold text-3xl myborder text-white">{data.name}</div>
          <div className="myborder text-gray-400 " > <p className={` text-xl lineHeight ${caveat.className}`}>{data.description}</p></div>
          <div className="myborder flex justify-center" onClick={()=>onClicked(data.name,data.coordinates)}><HoverButton/>  </div>

          </div>
        {/* <Link href={`/city/${data.name}`}> {data.name} </Link> */}

        </div>

      </div>

    </div>
  );
}
