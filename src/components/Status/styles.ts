import styled from 'styled-components/native';
import Constants from 'expo-constants'
import { Ionicons, AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
`;

export const ViewImage = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #fff;
  border-width: 2px;
  border-color: #0EAD97;
  justify-content: center;
  align-items: center;
`;

export const ImageStatus = styled.Image`
  width: 63px;
  height: 63px;
  border-radius: 50px;
`;

export const ViewTextStatus = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  padding-horizontal: 10px;

`;

export const TitleStatus = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TimeStatus = styled.Text`
  font-size: 16px;
  color: #7E7E7E;
`;
