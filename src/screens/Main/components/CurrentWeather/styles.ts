import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
  },
});

export const Container = styled.View``;

export const IconContainer = styled.View`
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
