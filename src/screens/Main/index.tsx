import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';

import type { NextDay } from './types/NextDay';

import { useGetCurrentPosition } from './hooks/useGetCurrentPosition';
import { useReverseGeocoding } from './hooks/useReverseGeocoding';
import { useGetWeather } from './hooks/useGetWeather';

import { CurrentWeather } from './components/CurrentWeather';
import { WeatherCard } from './components/WeatherCard';

import { Container, NextDaysWeather } from './styles';

export const MainScreen = () => {
  const { longitude, latitude } = useGetCurrentPosition();
  const { currentWeather, nextDaysWeather } = useGetWeather({ longitude, latitude });
  const location = useReverseGeocoding({ longitude, latitude });

  const renderWeatherCard = useCallback(
    ({ item }: ListRenderItemInfo<NextDay>) => (
      <WeatherCard
        timestamp={item.dt}
        weatherCode={item.weather[0].id}
        minimumTemperature={item.temp.min}
        maximumTemperature={item.temp.max}
      />
    ),
    [],
  );

  return (
    <Container>
      {/* TODO add loading screen */}

      {currentWeather && location && (
        <CurrentWeather weather={currentWeather} location={location} />
      )}

      <NextDaysWeather
        data={nextDaysWeather}
        keyExtractor={(item) => String(item.dt)}
        renderItem={renderWeatherCard}
      />
    </Container>
  );
};
