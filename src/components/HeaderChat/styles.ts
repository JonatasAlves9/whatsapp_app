import styled from 'styled-components/native';
import Constants from 'expo-constants'
import { Ionicons, AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  height: 80px;
  background-color: #075E55;
  padding-horizontal: 20px;
  flex-direction: row;
  align-items: center;
  margin-top: ${Constants.statusBarHeight}px;
`;

export const Avatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 20px;
  margin-left: 5px;
`;

export const Name = styled.Text`
  color: #FEFFFF;
  font-size: 17px;
  font-weight: bold;
  font-family: Roboto;
  margin-bottom: 5px;
`;

export const Status = styled.Text`]
  color: #DEFBF7;
  font-size: 12px;
  font-family: Roboto;
`;

export const ViewName = styled.View`
  margin-left: 10px;
`

export const ViewIcons = styled.View`
  right: 0;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`
export const Icons = styled(Ionicons)`
  margin-left: 20px;
`;

export const IconsBack = styled(AntDesign)`
`;

export const Button = styled.TouchableOpacity``;

