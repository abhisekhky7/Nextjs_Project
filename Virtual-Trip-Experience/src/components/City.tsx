"use client";
import React from "react";
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";
import { useContext } from "react";
import { cityContext } from "@/components/cityContext";

export default function City() {
  const cityName = useContext(cityContext);
  const containerStyle = {
    height: "100%",
    width: "100%",
  };

  const center = cityName?.lat && cityName?.lng
  ? { lat: cityName.lat, lng: cityName.lng }
  : null;

  const streetViewOptions: google.maps.StreetViewPanoramaOptions = {
    position: center, // Set position based on center
    visible: true, // Make it visible
    // Add other options as needed (refer to Google Maps API documentation)
  };


  return (
    <div className="flex w-full h-full">
      {center && (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <StreetViewPanorama options={streetViewOptions}
        />
      </GoogleMap>)}
    </div>
  
  
  );
}
