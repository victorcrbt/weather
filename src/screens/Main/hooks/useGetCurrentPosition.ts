import { useState, useEffect, useCallback } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { showMessage } from 'react-native-flash-message';

export function useGetCurrentPosition() {
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);

  const getCurrentPosition = useCallback(() => {
    setLongitude(null);
    setLatitude(null);

    Geolocation.getCurrentPosition(
      position => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      () =>
        showMessage({
          type: 'warning',
          message: 'Falha ao recuperar posição atual.',
        }),
    );
  }, []);

  useEffect(() => {
    getCurrentPosition();
  }, [getCurrentPosition]);

  return { longitude, latitude, getCurrentPosition };
}
