// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css'; // Import your CSS file

const MapComponent4 = () => {

    const position = [26.3, 25.2]
    const zoom = 2

    const emojiMarker = L.divIcon({
        className: 'emoji-marker', // Optional, for CSS styling
        html: '📍', // Use the emoji as the marker
        iconSize: [30, 30], // Adjust size if needed
        iconAnchor: [15, 30], // Center the emoji at the location
      });

    return (
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} className="map">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[-5.152, 46.200]} icon={emojiMarker}>
                <Popup>
                    Somalia : Shaqlan and her families home country
                </Popup>
            </Marker>
            <Marker position={[41.872, 12.567]} icon={emojiMarker}>
                <Popup>
                    Europe : Where Shaqlan is taken to
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent4;
