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
  WeatherDescriptionText,
  LocationText,
  CountryText,
} from './styles';

interface Props {
  weather: CurrentDay;
  location: Location;
  loading: boolean;
  loadingLocation: boolean;
}

export const CurrentWeather: React.FC<Props> = ({
  weather,
  location,
  loading,
  loadingLocation,
}) => {
  const weatherIcon = useMemo(() => {
    const Icon = getWeatherIcon({ code: weather.weather[0].id });

    return <Icon width={96} height={96} />;
  }, [weather]);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#fff" />
        </LoadingContainer>
      ) : (
        <>
          <IconContainer>{weatherIcon}</IconContainer>

          <TemperatureText style={styles.textShadow}>
            {formatTemperature({ temp: weather.temp })}
          </TemperatureText>

          <WeatherDescriptionText>
            {weather.weather[0].description}
          </WeatherDescriptionText>
        </>
      )}

      {loadingLocation && <ActivityIndicator size="large" color="#fff" />}

      {location && !loadingLocation && (
        <>
          <LocationText>{`${location.city}, ${location.state}`}</LocationText>

          <CountryText>{location.country}</CountryText>
        </>
      )}
    </Container>
  );
};
