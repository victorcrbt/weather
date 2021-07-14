import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs<typeof LinearGradient, LinearGradientProps>({
  colors: ['#C2D2DA', '#5192CE'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
})`
  flex: 1;

  justify-content: space-between;
`;

export const NextDaysWeather = (styled.FlatList.attrs({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'flex-end',
  },
})`
  margin-bottom: 32px;
  padding: 0 8px;
` as unknown) as typeof FlatList;
