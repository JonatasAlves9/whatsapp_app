import styled from 'styled-components/native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const CameraView = styled(Camera)`
  width: 100%;
  height: 100%;
`;
