import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const IndiaMap: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const covidData = useSelector((state: RootState) => state.covid.data);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !covidData) return null;

  const center: LatLngExpression = [20.5937, 78.9629];
  const zoom = 5;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {covidData.regional.map((state: any) => (
        <Marker position={[state.lat, state.long]} key={state.loc}>
          <Popup>
            {state.loc}: {state.totalConfirmed} cases
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default IndiaMap;
