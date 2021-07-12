import styled from 'styled-components/native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs<typeof LinearGradient, LinearGradientProps>({
  colors: ['#C2D2DA', '#5192CE'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
})`
  flex: 1;

  justify-content: space-between;
`;

export const CurrentWeatherContainer = styled.View``;

export const WeatherIconContainer = styled.View`
  margin-top: 32px;

  flex-direction: row;
  justify-content: center;
`;

const BaseText = styled.Text`
  font-weight: bold;
  text-align: center;
  color: #444;
`;

export const TemperatureText = styled(BaseText)`
  font-size: 64px;
`;

export const LocationText = styled(BaseText)`
  font-size: 24px;

`;

export const CountryText = styled(BaseText)`
  font-size: 18px;
`;

export const WeatherCardsContainer = styled.ScrollView.attrs({ horizontal: true })`
  margin-bottom: 32px;
  padding: 0 4px;
  
  
  flex-direction: row;
`;
