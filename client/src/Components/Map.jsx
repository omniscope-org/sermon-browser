import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import {v4 as uuidv4} from 'uuid'

function ChangeView({ center, zoom }) {
    const map = useMap()
    map.setView(center, zoom)
    return null
}

const Map = ({mapData, handleSelect}) => {
    const markers = mapData.map(d => <Marker 
        key = {uuidv4()} position = {[d.x, d.y]} eventHandlers = {{ click: () => handleSelect(d)}}
    >
        <Popup>
            Some Info
        </Popup>
    </Marker>)

    const center = mapData.length ? [mapData[0].x, mapData[0].y] : [51.505, -0.09]

    return <>
        <MapContainer center={center} zoom={13} scrollWheelZoom={true}
            style = {{width: '45%', height: 'auto'}}
        >
        <ChangeView center={center} zoom={13} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers}
        </MapContainer>
    </>
}

export default Map