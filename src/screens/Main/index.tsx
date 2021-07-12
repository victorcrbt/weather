import React from 'react';
import { StyleSheet, View } from 'react-native';

// Assets
import StormyWeather from '../../assets/weather-stormy.svg';

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

const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
  },
});

export const MainScreen = () => (
  <Container>
    <CurrentWeatherContainer>
      <WeatherIconContainer>
        <StormyWeather width={96} height={96} />
      </WeatherIconContainer>

      <TemperatureText style={styles.textShadow}>20°</TemperatureText>

      <LocationText>Osório, RS</LocationText>
      <CountryText>Brasil</CountryText>
    </CurrentWeatherContainer>

    <View>
      <WeatherCardsContainer>
        <WeatherCard title="segunda" weatherCode={100} />
        <WeatherCard title="terça" weatherCode={300} />
        <WeatherCard title="quarta" weatherCode={200} />
        <WeatherCard title="quinta" weatherCode={100} />
        <WeatherCard title="sexta" weatherCode={100} />
        <WeatherCard title="sábado" weatherCode={300} />
        <WeatherCard title="domingo" weatherCode={100} />
      </WeatherCardsContainer>
    </View>
  </Container>
);
