import styled from 'styled-components/native';
import { AntDesign, Feather, Ionicons, Entypo } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ViewInput = styled.View`
  flex: 1;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  margin: 5px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
`;

export const Input = styled.TextInput`
  padding-left: 10px;
  flex: 1;
  font-size: 16px;
  font-family: Roboto;
`;

export const ButtonAudio = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #00887A;
  border-radius: 500px;
  margin-right: 5px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const IconCamera = styled(Ionicons)`
  padding-left: 10px;
`;

