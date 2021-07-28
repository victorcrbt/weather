import React, { useCallback } from 'react';
import { ActivityIndicator, ListRenderItemInfo } from 'react-native';

import { WeatherCard } from '../WeatherCard';

import { Container, FlatList } from './styles';

interface Props {
  loading: boolean;
  data: MainScreen.NextDay[];
}
export const NextDaysWeather: React.FC<Props> = ({ loading, data }) => {
  const renderWeatherCard = useCallback(
    ({ item }: ListRenderItemInfo<MainScreen.NextDay>) => (
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
      keyExtractor={(item: MainScreen.NextDay) => String(item.dt)}
      renderItem={renderWeatherCard}
    />
  );
};
