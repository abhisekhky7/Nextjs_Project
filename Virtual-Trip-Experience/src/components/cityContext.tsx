import { createContext } from "react";

type cityProp = {
    lat: number | null;
    lng: number | null;
  };
  export const cityContext = createContext<cityProp | null>(null);