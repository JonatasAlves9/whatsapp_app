import styled from 'styled-components/native';
import { AntDesign, Feather } from '@expo/vector-icons';

export const Container = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  margin-horizontal: 10px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`;

export const TitleName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-family: Roboto;
  margin-bottom: 5px;
`;

export const Message = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const Time = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const ViewCenter = styled.View`
  flex: 1;
  height: 100%;
  padding-horizontal: 10px;
`;

export const ViewEnd = styled.View`
  height: 100%;
  padding-right: 25px;
`;

