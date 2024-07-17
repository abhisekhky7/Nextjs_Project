"use client";
import React, { useState } from "react";
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";
import { useContext } from "react";
import { CityContext } from "@/app/page";

export default function City() {
  const cityName = useContext(CityContext);
  const containerStyle = {
    height: "100%",
    width: "100%",
  };

  const center = {
    lat: cityName?.lat,
    lng: cityName?.lng,
  };

  return (
    <div className="flex w-full h-full">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <StreetViewPanorama
          id="street-view"
          mapContainerStyle={containerStyle}
          position={center}
          visible={true}
        />
      </GoogleMap>
    </div>
  );
}
