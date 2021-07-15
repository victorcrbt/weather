import { useState, useEffect, useCallback } from 'react';
import Geocoder from 'react-native-geocoding';
import { showMessage } from 'react-native-flash-message';

// Configs
import { GOOGLE_MAPS_API_KEY } from '@configs/api-keys';
import type { Location } from '../types/Location';

interface Props {
  longitude: number | null;
  latitude: number | null;
}

Geocoder.init(GOOGLE_MAPS_API_KEY);

// TODO cache location information
export function useReverseGeocoding({ longitude, latitude }: Props) {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);

  const getCurrentLocation = useCallback(async () => {
    setLoading(true);

    try {
      if (!latitude || !longitude) return;

      const { results } = await Geocoder.from({ latitude, longitude });

      const currentCity = results[0].address_components;

      setLocation({
        city: currentCity[3].long_name,
        state: currentCity[4].short_name,
        country: currentCity[5].long_name,
      });
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

  return { loadingLocation: loading, location, getCurrentLocation };
}
