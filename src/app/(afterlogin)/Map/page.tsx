'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import styles from './Map.module.css';
import SearchBar from '../_component/SearchBar';

const NAVER_CLIENT_ID = '';

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const initializeMap = () => {
    if (mapRef.current && (window as any).naver && location) {
      const { lat, lng } = location;
      const mapLocation = new (window as any).naver.maps.LatLng(lat, lng);
      const mapOptions = {
        center: mapLocation,
        zoom: 17,
      };
      const map = new (window as any).naver.maps.Map(mapRef.current, mapOptions);
      
      new (window as any).naver.maps.Marker({
        position: mapLocation,
        map: map
      });
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error.message);
          setLocation({ lat: 37.5665, lng: 126.9780 });
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setLocation({ lat: 37.5665, lng: 126.9780 });
    }
  }, []);

  useEffect(() => {
    if (location) {
      initializeMap();
    }
  }, [location]);

  return (
    <div className={styles.mapContainer}>
      <SearchBar />
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div ref={mapRef} className={styles.mapContent} />
    </div>
  );
};

export default Map;
