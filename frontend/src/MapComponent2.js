// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css'; // Import your CSS file

const MapComponent2 = () => {

    const position = [41, 12.5]
    const zoom = 0

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
            <Marker position={[51.507, 0.128]} icon={emojiMarker}>
                <Popup>
                    London : Lahiri's birthplace
                </Popup>
            </Marker>
            <Marker position={[41.580, -71.477]} icon={emojiMarker}>
                <Popup>
                    Rhode Island : Where Lahiri was raised and grew up in
                </Popup>
            </Marker>
            <Marker position={[41.896, 12.482]} icon={emojiMarker}>
                <Popup>
                    Rome : Where Lahiri moved to in Italy and currently resides in
                </Popup>
            </Marker>
            <Marker position={[22.57, 88.37]} icon={emojiMarker}>
                <Popup>
                    Bengal Region of South Asia : Where Lahiri's mother-tongue originates from
                </Popup>
            </Marker>
        </MapContainer>
        
    );
};

export default MapComponent2;
