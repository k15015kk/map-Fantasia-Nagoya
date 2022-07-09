import { GeoJsonLayer } from "@deck.gl/layers";

const TripTrackLayer = (props) => {

  const geoJsonLayer = new GeoJsonLayer({
    id: "geojson",
    data: props.travelTrackJsonData,
    lineWidthUnits: "pixels",
    getLineWidth: 4,
    getLineColor: [255, 241, 118, 255],
  });

  return geoJsonLayer
};

export default TripTrackLayer;