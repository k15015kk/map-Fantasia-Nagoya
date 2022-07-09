import { IconLayer } from "deck.gl";

const imageSize = 256;
const offset = 0;

const ICON_MAPPING = {
  marker: {
    x: offset,
    y: offset,
    anchorY: imageSize,
    width: imageSize,
    height: imageSize,
    mask: true,
  },
};

const BusStopIconLayer = (props) => {

  const iconLayer = new IconLayer({
    id: "icon-layer",
    data: props.busStopJsonData.features,
    pickable: true,
    iconAtlas: "./img/pin_icon.png",
    iconMapping: ICON_MAPPING,
    sizeScale: 4,
    getSize: d => 12,
    getIcon: d => 'marker',
    getColor: (d) => {
      switch (d.properties.type) {
        case "Bus Stop":
          return [100, 181, 246, 255];
        case "Operation Stop":
          return [129, 199, 132, 255];
        default:
          return [224, 224, 224, 255];
      }
    },
    getPosition: (d) => d.geometry.coordinates,
  });

  return iconLayer;
};

export default BusStopIconLayer;
