import { TextLayer } from "deck.gl"

const NameTextLayer = (props) => {
    const textLayer = new TextLayer({
        id: "text-layer",
        data: props.busStopJsonData.features,
        background: true,
        backgroundPadding: [8, 4, 8, 4],
        getPixelOffset: [0, -64],
        getColor: [255, 255, 255, 255],
        getBackgroundColor: [97, 97, 97, 255],
        getText: d => d.properties.name,
        getSize: 12,
        getTextAnchor: 'middle',
        getAlignmentBaseline: 'bottom',
        getPosition: d => d.geometry.coordinates,
    })

    return textLayer
}

export default NameTextLayer