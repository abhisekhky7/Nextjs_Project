"use client";
import Card from "@/components/Card";
import data from "@/database/db";
import { anta } from "@/components/font";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useState } from "react";
import City from "@/components/City";
import { LoadScript } from "@react-google-maps/api";

type cityProp = {
  lat: number | null;
  lng: number | null;
};
export const CityContext = createContext<cityProp | null>(null);

export default function Home() {
  const key = process.env.my_key as string;

  const [selectedId, setId] = useState<string | null>(null);
  const [cityName, setCity] = useState<cityProp | null>(null);

  const callme = (name: string, cord: { lat: number; lng: number }) => {
    setId(name);
    const newCord = { cord };
    setCity({ lat: cord.lat, lng: cord.lng });
  };

  const closeme = (e: React.MouseEvent<HTMLDivElement>) => {
    const divName = e.currentTarget.getAttribute("id");

    if (divName === "svBox") {
      e.stopPropagation();
      return;
    }
    if (selectedId) setId(null);
    if (cityName) setCity(null);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Its a work in progress...");
  };

  return (
    <div className="flex " onClick={(e) => closeme(e)}>
      <div>
        <header className=" sticky top-0 bg-black z-40 ">
          <div className=" justify-center flex p-3   ">
            <h1
              className={`${anta.className}  text-3xl md:text-5xl`}
              id="title"
            >
              Welcome To Virtual Tour
            </h1>
          </div>
        </header>
        <div className="">
          <div className="m-20  flex justify-center ">
            <form onSubmit={(e) => handleSubmit(e)}>
              {" "}
              <input
                type="text"
                className={` text-black text-center p-1 text-xl capitalize ${anta.className}`}
                name="city"
                placeholder="Enter City Name"
              />
              <button className=" text-white m-1">Search</button>
            </form>
          </div>

          <motion.div className={`grid grid-cols-1 gap-7 ${anta.className}`}>
            {data.map((item, ind) => (
              <Card data={item} key={ind} onClicked={callme} />
            ))}
          </motion.div>
        </div>
      </div>
      <LoadScript googleMapsApiKey={key} libraries={["places"]}>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className=" mytest"
              onClick={(e) => closeme(e)}
              id="svBox"
            >
              <CityContext.Provider value={cityName}>
                <City />
              </CityContext.Provider>
            </motion.div>
          )}
        </AnimatePresence>
      </LoadScript>
    </div>
  );
}
