import React, { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';

// Helpers
import { getWeatherIcon } from '@helpers/get-weather-icon';
import { formatTemperature } from '@helpers/format-temperature';

// Types
import type { CurrentDay } from '../../types/CurrentDay';
import type { Location } from '../../types/Location';

import {
  styles,
  Container,
  LoadingContainer,
  IconContainer,
  TemperatureText,
  LocationText,
  CountryText,
} from './styles';

interface Props {
  weather: CurrentDay;
  location: Location;
  loading: boolean;
}

export const CurrentWeather: React.FC<Props> = ({
  weather,
  location,
  loading,
}) => {
  const weatherIcon = useMemo(() => {
    const Icon = getWeatherIcon({ code: weather.weather[0].id });

    return <Icon width={96} height={96} />;
  }, [weather]);

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#fff" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <IconContainer>{weatherIcon}</IconContainer>

      <TemperatureText style={styles.textShadow}>
        {formatTemperature({ temp: weather.temp })}
      </TemperatureText>

      <LocationText>{`${location.city}, ${location.state}`}</LocationText>

      <CountryText>{location.country}</CountryText>
    </Container>
  );
};
