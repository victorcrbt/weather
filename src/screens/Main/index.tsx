import React, { useState, useEffect, useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

// Configs
import { GOOGLE_MAPS_API_KEY } from '@configs/api-keys';

// Services
import { api } from '@services/api';

import type { Location } from './types/Location';
import type { CurrentDay } from './types/CurrentDay';
import type { NextDay } from './types/NextDay';

import { CurrentWeather } from './components/CurrentWeather';
import { WeatherCard } from './components/WeatherCard';

import { Container, NextDaysWeather } from './styles';

Geocoder.init(GOOGLE_MAPS_API_KEY);

export const MainScreen = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [current, setCurrent] = useState<CurrentDay | null>(null);
  const [nextDays, setNextDays] = useState<NextDay[]>([]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const { results } = await Geocoder.from({ latitude, longitude });

        const [currentCity] = results;

        const [,,, city, state, country] = currentCity.address_components;
        setLocation({
          city: city.long_name,
          state: state.short_name,
          country: country.long_name,
        });

        const response = await api.get('/onecall', {
          params: {
            lat: latitude,
            lon: longitude,
            units: 'metric',
            lang: 'pt_br',
          },
        });

        setCurrent(response.data.current);
        setNextDays(response.data.daily);
      },
      (error) => console.log(error),
    );
  }, []);

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
      {current && location && <CurrentWeather weather={current} location={location} />}

      <NextDaysWeather
        data={nextDays}
        keyExtractor={(item) => String(item.dt)}
        renderItem={renderWeatherCard}
      />
    </Container>
  );
};
