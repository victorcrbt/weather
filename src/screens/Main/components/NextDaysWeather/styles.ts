import styled from 'styled-components/native';

export const Container = styled.View`
  max-height: 180px;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const FlatList = styled.FlatList.attrs({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'flex-end',
  },
})`
  max-height: 180px;
  margin-bottom: 32px;
  padding: 0 8px;
` as unknown as typeof FlatList;
