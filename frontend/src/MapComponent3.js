// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css'; // Import your CSS file

const MapComponent3 = () => {

    const position = [41.8945, 12.5044]
    const zoom = 15

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
            <Marker position={[41.895, 12.504]} icon={emojiMarker}>
                <Popup>
                    Piazza Vittorio : Setting of the documentary
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent3;
