import React from 'react';
import { PressableProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';

export const RefreshButton: React.FC<PressableProps> = props => (
  <Container {...props}>
    <Icon name="refresh" size={40} color="#fff" />
  </Container>
);
