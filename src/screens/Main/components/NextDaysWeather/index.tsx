import React, { useCallback } from 'react';
import { ActivityIndicator, ListRenderItemInfo } from 'react-native';

import type { NextDay } from '../../types/NextDay';

import { WeatherCard } from '../WeatherCard';

import { Container, FlatList } from './styles';

interface Props {
  loading: boolean;
  data: NextDay[];
}

export const NextDaysWeather: React.FC<Props> = ({ loading, data }) => {
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

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#fff" />
      </Container>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item: NextDay) => String(item.dt)}
      renderItem={renderWeatherCard}
    />
  );
};
