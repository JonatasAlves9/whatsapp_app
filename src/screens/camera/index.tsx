import React, { useEffect, useState } from 'react';
import { Container, CameraView } from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { Camera } from 'expo-camera';
import { Header } from 'src/components/Header';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const CameraScreen = ({ navigation }: Props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <>
      <Container>
        <CameraView type={type} />
      </Container>
    </>
  );
};
