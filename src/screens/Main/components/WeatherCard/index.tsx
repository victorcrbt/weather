import React from 'react';
// eslint-disable-next-line
import { format } from 'date-fns';
// eslint-disable-next-line
import { ptBR } from 'date-fns/locale';

// Helpers
import { getWeatherIcon } from '@helpers/get-weather-icon';
import { formatTemperature } from '@helpers/format-temperature';

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
  timestamp: number;
  weatherCode: number;
  minimumTemperature: number;
  maximumTemperature: number;
}

export const WeatherCard: React.FC<Props> = ({
  timestamp,
  weatherCode,
  minimumTemperature,
  maximumTemperature,
}) => {
  const Icon = getWeatherIcon({ code: weatherCode });

  return (
    <Container>
      <CardTitle>
        {format(timestamp * 1000, 'EEEEEE', { locale: ptBR })}
      </CardTitle>

      <IconContainer>
        <Icon width={48} height={48} />
      </IconContainer>

      <TemperaturesContainer>
        <Row showSeparator>
          <TemperatureLabel>min</TemperatureLabel>
          <TemperatureValue>
            {formatTemperature({ temp: minimumTemperature })}
          </TemperatureValue>
        </Row>

        <Row>
          <TemperatureLabel>max</TemperatureLabel>
          <TemperatureValue>
            {formatTemperature({ temp: maximumTemperature })}
          </TemperatureValue>
        </Row>
      </TemperaturesContainer>
    </Container>
  );
};
