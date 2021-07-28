import { useCallback, useEffect, useState } from 'react';
import { showMessage } from 'react-native-flash-message';

// Services
import { api } from '@services/api';
import { save, get } from '@services/local-storage';

interface Props {
  longitude: number | null;
  latitude: number | null;
}

export function useGetWeather({ longitude, latitude }: Props) {
  const [loading, setLoading] = useState(false);
  const [isUsingCachedData, setIsUsingCachedData] = useState(false);
  const [currentWeather, setCurrentWeather] =
    useState<MainScreen.CurrentDay | null>(null);
  const [nextDaysWeather, setNextDaysWeather] = useState<MainScreen.NextDay[]>(
    [],
  );

  const saveDataOnStorage = useCallback(
    async ({
      current,
      nextDays,
    }: {
      current: MainScreen.CurrentDay;
      nextDays: MainScreen.NextDay[];
    }) => {
      await save({ key: 'weather', data: { current, nextDays } });
    },
    [],
  );

  const retrieveDataFromStorage = useCallback(async () => {
    setIsUsingCachedData(true);

    const data: {
      current: MainScreen.CurrentDay;
      nextDays: MainScreen.NextDay[];
    } | null = await get({ key: 'weather' });

    if (data) {
      setCurrentWeather(data.current);
      setNextDaysWeather(data.nextDays);
    }
  }, []);

  const getWeather = useCallback(async () => {
    if (!latitude || !longitude) return;

    if (!isUsingCachedData) {
      setLoading(true);
    }

    try {
      const response = await api.get('/onecall', {
        params: {
          lat: latitude,
          lon: longitude,
          units: 'metric',
          lang: 'pt_br',
          exclude: 'hourly,minutely,alerts',
        },
      });

      await saveDataOnStorage({
        current: response.data.current,
        nextDays: response.data.daily.slice(1, -1),
      });

      setCurrentWeather(response.data.current);
      setNextDaysWeather(response.data.daily.slice(1, -1));
    } catch (error) {
      showMessage({
        type: 'warning',
        message: 'Falha ao recuperar dados do clima.',
      });
    } finally {
      setLoading(false);
      setIsUsingCachedData(false);
    }
  }, [longitude, latitude, isUsingCachedData]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  useEffect(() => {
    retrieveDataFromStorage();
  }, []);

  return {
    loadingWeather: loading,
    currentWeather,
    nextDaysWeather,
    getWeather,
  };
}
