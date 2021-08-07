import styled from 'styled-components/native';
import { AntDesign, Feather } from '@expo/vector-icons';
import Constants from 'expo-constants'

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ViewStatusUser = styled.View`
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
`;

export const AvatarStatusUser = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-color: #21C55A;
  justify-content: center;
  align-items: center;
`;

export const ViewButtonAdd = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background-color: #fff;
  margin-left: -27px;
  margin-top: 43px;
  justify-content: center;
  align-items: center;
`;

export const ViewTextStatusUser = styled.View`
  flex: 1;
  margin-left: 10px;
`

export const TitleStatusUser = styled.Text`
  font-size: 18px;
  font-family: Roboto;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const DescriptionStatusUser = styled.Text`
  font-size: 13px;
  font-family: Roboto;
  color: #757575;
`;

export const TitleSession = styled.Text`
  font-size: 13px;
  font-family: Roboto;
  font-weight: bold;
  color: #757575;
`;

