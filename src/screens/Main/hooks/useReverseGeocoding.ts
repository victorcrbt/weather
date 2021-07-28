import { useState, useEffect, useCallback } from 'react';
import Geocoder from 'react-native-geocoding';
import { showMessage } from 'react-native-flash-message';

// Configs
import { GOOGLE_MAPS_API_KEY } from '@configs/api-keys';
import { save, get } from '@services/local-storage';

interface Props {
  longitude: number | null;
  latitude: number | null;
}

Geocoder.init(GOOGLE_MAPS_API_KEY);

export function useReverseGeocoding({ longitude, latitude }: Props) {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<MainScreen.Location | null>(null);

  const saveDataOnStorage = useCallback(
    async ({ storedLocation }: { storedLocation: MainScreen.Location }) => {
      await save({ key: 'location', data: { storedLocation } });
    },
    [],
  );

  const retrieveDataFromStorage = useCallback(async () => {
    const data: { storedLocation: MainScreen.Location } | null = await get({
      key: 'location',
    });

    if (data) {
      setLocation(data.storedLocation);
    }
  }, []);

  const getCurrentLocation = useCallback(async () => {
    if (!latitude || !longitude) return;

    setLoading(true);

    try {
      const { results } = await Geocoder.from({ latitude, longitude });

      const currentCity = results[0].address_components;

      const currentLocation = {
        city: currentCity[3].long_name,
        state: currentCity[4].short_name,
        country: currentCity[5].long_name,
      };

      await saveDataOnStorage({ storedLocation: currentLocation });

      setLocation(currentLocation);
    } catch (error) {
      showMessage({
        type: 'warning',
        message: 'Falha ao recuperar localização atual.',
      });
    } finally {
      setLoading(false);
    }
  }, [longitude, latitude]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  useEffect(() => {
    retrieveDataFromStorage();
  }, []);

  return { loadingLocation: loading, location, getCurrentLocation };
}
