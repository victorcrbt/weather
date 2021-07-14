import React, { useState, useEffect, useMemo } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { StyleSheet, View } from 'react-native';
import Geocoder from 'react-native-geocoding';

// Configs
import { GOOGLE_MAPS_API_KEY } from '@configs/api-keys';

// Services
import { api } from '@services/api';

// Helpers
import { getWeatherIcon } from '@helpers/get-weather-icon';

import { WeatherCard } from './components/WeatherCard';

import {
  Container,
  CurrentWeatherContainer,
  WeatherIconContainer,
  TemperatureText,
  LocationText,
  CountryText,
  WeatherCardsContainer,
} from './styles';

Geocoder.init(GOOGLE_MAPS_API_KEY);

const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
  },
});

export const MainScreen = () => {
  const [location, setLocation] = useState<any>(null);
  const [current, setCurrent] = useState<any>(null);
  const [nextDays, setNextDays] = useState<any>([]);

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

        console.log(response.data);

        setCurrent(response.data.current);
        setNextDays(response.data.daily);
      },
      (error) => console.log(error),
    );
  }, []);

  const CurrentWeatherIcon = getWeatherIcon({
    code: current && current.weather[0].id ? current.weather[0].id : 800,
  });

  return (
    <Container>
      {current && (
        <CurrentWeatherContainer>
          <WeatherIconContainer>
            <CurrentWeatherIcon width={96} height={96} />
          </WeatherIconContainer>

          <TemperatureText style={styles.textShadow}>
            {`${Math.round(current.temp)}°`}
          </TemperatureText>

          {location && (
          <LocationText>
            {location.city}
            ,
            {' '}
            {location.state}
          </LocationText>
          )}
          {location && <CountryText>{location.country}</CountryText>}
        </CurrentWeatherContainer>
      )}

      <View>
        <WeatherCardsContainer>
          {nextDays.map((day) => <WeatherCard key={day.dt} timestamp={day.dt} title="oi" weatherCode={day.weather[0].id} minimumTemperature={day.temp.min} maximumTemperature={day.temp.max} />)}
        </WeatherCardsContainer>
      </View>
    </Container>
  );
};
