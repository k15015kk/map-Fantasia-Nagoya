import ReactMapGL from "react-map-gl";
import maplibregl from "maplibre-gl";
import DeckGL from "@deck.gl/react";
import { useEffect, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { load } from "@loaders.gl/core";
import { JSONLoader } from "@loaders.gl/json";
import TripTrackLayer from "./TripTrackLayer";
import BusStopIconLayer from "./BusStopIconLayer";

const Map = () => {

  const [travelTrackJsonData, setTravelTrackJsonData] = useState(0)
  const [busStopJsonData, setBusStopJsonData] = useState(0)

  const [viewState, setViewState] = useState({
    longitude: 139.828256420331,
    latitude: 35.55530889289409,
    zoom: 10,
  });

  useEffect(() => {

    const dataLoad= async() => {
      const travel_track_res = await load("./data/LineString_Fantasia_Nagoya_2_Ebina_to_Nishi-FUnabashi.geojson", JSONLoader);
      setTravelTrackJsonData(travel_track_res)

      const bus_stop_res = await load("./data/Point_Fantasia_Nagoya_2_BusStop.geojson", JSONLoader);
      setBusStopJsonData(bus_stop_res)
    }

    dataLoad();
  }, []);


  return (
    <DeckGL
      initialViewState={viewState}
      layers={[
        TripTrackLayer({travelTrackJsonData}),
        BusStopIconLayer({busStopJsonData})
      ]}
      style={{ width: "100vw", height: "100vh" }}
      controller={true}
      onViewStateChange={(event) => setViewState(event.viewState)}
      getTooltip={ ({object}) => object && `${object.properties.name}` }
    >
      <ReactMapGL mapStyle={process.env.MAP_URL} mapLib={maplibregl} />
    </DeckGL>
  );
};

export default Map;