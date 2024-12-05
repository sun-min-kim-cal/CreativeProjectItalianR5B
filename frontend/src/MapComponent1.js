// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css'; // Import your CSS file

const MapComponent1 = () => {

    const position = [35, 7]
    const zoom = 3

    const emojiMarker = L.divIcon({
        className: 'emoji-marker', // Optional, for CSS styling
        html: '📍', // Use the emoji as the marker
        iconSize: [30, 30], // Adjust size if needed
        iconAnchor: [15, 30], // Center the emoji at the location
      });

    console.log()

    return (
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} className="map">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[41.895, 12.504]} icon={emojiMarker}>
                <Popup>
                    Piazza Vittorio : Setting of the book and hometown of many of the natives in the book
                </Popup>
            </Marker>
            <Marker position={[28.034, 1.660]} icon={emojiMarker}>
                <Popup>
                    Algeria : Amadeo's home country
                </Popup>
            </Marker>
            <Marker position={[40.852, 14.268]} icon={emojiMarker}>
                <Popup>
                    Naples : Benedetta Esposito's home city
                </Popup>
            </Marker>
            <Marker position={[-9.190, -75.015]} icon={emojiMarker}>
                <Popup>
                    Peru : Maria Cristina Gonzalez's home country
                </Popup>
            </Marker>
            <Marker position={[23.685, 90.356]} icon={emojiMarker}>
                <Popup>
                    Bangladesh : Iqbal Amir Allah's home country
                </Popup>
            </Marker>
            <Marker position={[45.468, 9.182]} icon={emojiMarker}>
                <Popup>
                    Milan : Antonio Marini's home city
                </Popup>
            </Marker>
            <Marker position={[52.133, 5.291]} icon={emojiMarker}>
                <Popup>
                    Netherlands : Johan Van Marten's home country
                </Popup>
            </Marker>
            <Marker position={[32.428, 53.688]} icon={emojiMarker}>
                <Popup>
                    Iran : Parviz Mansoor Samadi's home country
                </Popup>
            </Marker>
            
            
        </MapContainer>
    );
};

export default MapComponent1;
