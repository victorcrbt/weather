import React from 'react';

import { getWeatherIcon } from '@helpers/get-weather-icon';
import SunnyWeather from '../../../../assets/weather-rain.svg';

// Helpers

import {
  Container,
  CardTitle,
  IconContainer,
  TemperaturesContainer,
  Row,
  TemperatureLabel,
  TemperatureValue,
} from './styles';

interface Props {
  title: string;
  weatherCode: number;
}

export const WeatherCard: React.FC<Props> = ({ title, weatherCode }) => {
  const Icon = getWeatherIcon({ code: weatherCode });

  return (
    <Container>
      <CardTitle>{title}</CardTitle>

      <IconContainer>
        <Icon width={48} height={48} />
      </IconContainer>

      <TemperaturesContainer>
        <Row showSeparator>
          <TemperatureLabel>min</TemperatureLabel>
          <TemperatureValue>8°</TemperatureValue>
        </Row>

        <Row>
          <TemperatureLabel>max</TemperatureLabel>
          <TemperatureValue>5°</TemperatureValue>
        </Row>
      </TemperaturesContainer>
    </Container>
  );
};
