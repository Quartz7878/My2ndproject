
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = () => {
    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    const location = {
        lat: 23.733348, lng: 90.406707
    };

    const onLoad = marker => {
        console.log('marker: ', marker)
      }

    return (
        <LoadScript
            // googleMapsApiKey={API_KEY}
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                center={location}
                zoom={16}
            >
                <Marker
                    onLoad={onLoad}
                    position={location}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default Maps;
