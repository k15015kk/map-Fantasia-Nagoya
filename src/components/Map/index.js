import ReactMapGL from "react-map-gl";
import maplibregl from "maplibre-gl";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { useEffect, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = () => {

const [jsonData, setJsonData] = useState([])

  const [viewState, setViewState] = useState({
    longitude: 139.828256420331,
    latitude: 35.55530889289409,
    zoom: 10,
  });

  useEffect(() => {
    const data = require("../../data/LineString_Fantasia_Nagoya_2_Ebina_to_Nishi-Funabashi.json");
    setJsonData(data);
  }, []);


  const geoJsonLayer = new GeoJsonLayer({
    id: "geojson",
    data: jsonData,
    lineWidthUnits: 'pixels',
    getLineWidth: 4,
    getLineColor: [255, 241, 118, 255],
  });

  return (
    <DeckGL
      initialViewState={viewState}
      layers={[geoJsonLayer]}
      style={{ width: "100vw", height: "100vh" }}
      controller={true}
      onViewStateChange={(event) => setViewState(event.viewState)}
    >
      <ReactMapGL mapStyle={process.env.MAP_URL} mapLib={maplibregl} />
    </DeckGL>
  );
};

export default Map;