import styled from 'styled-components/native';
import { AntDesign, Feather } from '@expo/vector-icons';

export const Container = styled.View`
  height: 100px;
  background-color: #075E55;
  padding-horizontal: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
`;

export const IconsView = styled.View`
  flex-direction: row;
`;

export const IconSearch = styled(AntDesign)`
  margin-right: 25px;
`;
export const IconMore = styled(Feather)``;

export const ButtonIcon = styled.TouchableOpacity``;
