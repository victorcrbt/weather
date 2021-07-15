import { useCallback, useEffect, useState } from 'react';
import { showMessage } from 'react-native-flash-message';

// Services
import { api } from '@services/api';

import type { CurrentDay } from '../types/CurrentDay';
import type { NextDay } from '../types/NextDay';

interface Props {
  longitude: number | null;
  latitude: number | null;
}

// TODO cache weather information
export function useGetWeather({ longitude, latitude }: Props) {
  const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState<CurrentDay | null>(null);
  const [nextDaysWeather, setNextDaysWeather] = useState<NextDay[]>([]);

  const getWeather = useCallback(async () => {
    if (!latitude || !longitude) return;

    setLoading(true);

    try {
      const response = await api.get('/onecall', {
        params: {
          lat: latitude,
          lon: longitude,
          units: 'metric',
          lang: 'pt_br',
        },
      });

      setCurrentWeather(response.data.current);
      setNextDaysWeather(response.data.daily.slice(0, -1));
    } catch (error) {
      showMessage({
        type: 'warning',
        message: 'Falha ao recuperar dados do clima.',
      });
    } finally {
      setLoading(false);
    }
  }, [longitude, latitude]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return {
    loadingWeather: loading,
    currentWeather,
    nextDaysWeather,
    getWeather,
  };
}
