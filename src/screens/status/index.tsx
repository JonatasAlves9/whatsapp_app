import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  ViewStatusUser,
  AvatarStatusUser,
  ButtonAdd,
  ViewButtonAdd,
  ViewTextStatusUser,
  TitleStatusUser,
  DescriptionStatusUser,
  TitleSession,
} from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <Container>
      <ViewStatusUser>
        <AvatarStatusUser
          source={{
            uri: 'https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4',
          }}
        />
        <ViewButtonAdd>
          <ButtonAdd>
            <Ionicons name="add" size={25} color="white" />
          </ButtonAdd>
        </ViewButtonAdd>
        <ViewTextStatusUser>
          <TitleStatusUser>Meu Status</TitleStatusUser>
          <DescriptionStatusUser>
            Toque para atualizar seu status
          </DescriptionStatusUser>
        </ViewTextStatusUser>
      </ViewStatusUser>
    </Container>
  );
}
