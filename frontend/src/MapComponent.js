// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css'; // Import your CSS file

const MapComponent = () => {

    const position = [41.87, 12.57]
    const zoom = 5
    console.log()

    return (
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} className="map">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};

export default MapComponent;
