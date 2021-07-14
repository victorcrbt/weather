import { useState, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';

export function useGetCurrentPosition(dependencies: any[] = []) {
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);

  useEffect(() => {
    // TODO ask for location permission

    Geolocation.getCurrentPosition(
      (position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      (error) => console.log(error), // TODO handle error

    );
  }, [dependencies]);

  return { longitude, latitude };
}
