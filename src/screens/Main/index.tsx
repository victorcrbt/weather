import React, { useCallback } from 'react';

import { RefreshButton } from '@components/Controls/RefreshButton';

import { useGetCurrentPosition } from './hooks/useGetCurrentPosition';
import { useReverseGeocoding } from './hooks/useReverseGeocoding';
import { useGetWeather } from './hooks/useGetWeather';

import { CurrentWeather } from './components/CurrentWeather';
import { NextDaysWeather } from './components/NextDaysWeather';

import { Container } from './styles';

export const MainScreen = () => {
  const { longitude, latitude, getCurrentPosition } = useGetCurrentPosition();
  const { loadingWeather, currentWeather, nextDaysWeather } = useGetWeather({
    longitude,
    latitude,
  });
  const { location } = useReverseGeocoding({
    longitude,
    latitude,
  });

  const handleRefresh = useCallback(async () => {
    getCurrentPosition();
  }, [getCurrentPosition]);

  return (
    <Container
      // weatherCode={(currentWeather && currentWeather.weather[0].id) || null}
      weatherCode={200}>
      {/* TODO add refresh button */}

      {currentWeather && location && (
        <CurrentWeather
          weather={currentWeather}
          location={location}
          loading={loadingWeather}
          loadingLocation={loadingWeather}
        />
      )}

      {currentWeather && location && (
        <NextDaysWeather data={nextDaysWeather} loading={loadingWeather} />
      )}

      <RefreshButton onPress={handleRefresh} />
    </Container>
  );
};
