import styled from 'styled-components/native';
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
