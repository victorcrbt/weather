import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs<
  typeof LinearGradient,
  LinearGradientProps
>({
  colors: ['#5192CE', '#5192CE'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
})`
  flex: 1;

  justify-content: space-between;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NextDaysWeather = styled.FlatList.attrs({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'flex-end',
  },
})`
  max-height: 180px;
  margin-bottom: 32px;
  padding: 0 8px;
` as unknown as typeof FlatList;
