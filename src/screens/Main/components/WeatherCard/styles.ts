import styled, { css } from 'styled-components/native';

interface RowProps {
  showSeparator?: boolean;
}

export const Container = styled.View`
  width: 126px;
  height: 175px;
  margin: 0 4px;
  padding: 8px;

  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;

  justify-content: space-between;
`;

const BaseText = styled.Text`
  color: #333;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export const CardTitle = styled(BaseText)``;

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const TemperaturesContainer = styled.View`
  justify-content: flex-end;
`;

export const Row = styled.View<RowProps>`
  padding: 4px 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  ${props =>
    props.showSeparator &&
    css`
      border-bottom-color: rgba(0, 0, 0, 0.05);
      border-bottom-width: 1px;
    `}
`;

export const TemperatureLabel = styled(BaseText)`
  font-size: 14px;
`;

export const TemperatureValue = styled(BaseText)`
  font-size: 24px;
`;
