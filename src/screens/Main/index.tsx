import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useGetCurrentPosition } from './hooks/useGetCurrentPosition';
import { useReverseGeocoding } from './hooks/useReverseGeocoding';
import { useGetWeather } from './hooks/useGetWeather';

import { CurrentWeather } from './components/CurrentWeather';
import { NextDaysWeather } from './components/NextDaysWeather';

import { Container, LoadingContainer } from './styles';

export const MainScreen = () => {
  const { longitude, latitude } = useGetCurrentPosition();
  const { loadingWeather, currentWeather, nextDaysWeather } = useGetWeather({
    longitude,
    latitude,
  });
  const { loadingLocation, location } = useReverseGeocoding({
    longitude,
    latitude,
  });

  if (loadingWeather && loadingLocation) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#000" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      {/* TODO add refresh button */}

      {currentWeather && location && (
        <CurrentWeather
          weather={currentWeather}
          location={location}
          loading={loadingWeather}
        />
      )}

      <NextDaysWeather data={nextDaysWeather} loading={loadingWeather} />
    </Container>
  );
};
