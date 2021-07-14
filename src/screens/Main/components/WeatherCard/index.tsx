import React from 'react';
// eslint-disable-next-line
import { format } from 'date-fns';
// eslint-disable-next-line
import { ptBR } from 'date-fns/locale';

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
  timestamp: number;
  weatherCode: number;
  minimumTemperature: number;
  maximumTemperature: number;
}

export const WeatherCard: React.FC<Props> = ({
  title,
  timestamp,
  weatherCode,
  minimumTemperature,
  maximumTemperature,
}) => {
  const Icon = getWeatherIcon({ code: weatherCode });

  return (
    <Container>
      <CardTitle>{format(timestamp * 1000, 'EEEEEE', { locale: ptBR })}</CardTitle>

      <IconContainer>
        <Icon width={48} height={48} />
      </IconContainer>

      <TemperaturesContainer>
        <Row showSeparator>
          <TemperatureLabel>min</TemperatureLabel>
          <TemperatureValue>{`${Math.round(minimumTemperature)}°`}</TemperatureValue>
        </Row>

        <Row>
          <TemperatureLabel>max</TemperatureLabel>
          <TemperatureValue>{`${Math.round(maximumTemperature)}°`}</TemperatureValue>
        </Row>
      </TemperaturesContainer>
    </Container>
  );
};
