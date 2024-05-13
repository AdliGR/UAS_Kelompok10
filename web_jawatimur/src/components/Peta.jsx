import React, { useEffect } from 'react';

function Map() {
    useEffect(() => {
    async function loadMap() {
        const google = window.google;
        const { Map } = await google.maps.importLibrary('maps');
        const map = new Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }

        loadMap();

        return () => {
    };
    }, []);

    return <div id="map" style={{ height: '400px' }}></div>;
}

export default Map;
