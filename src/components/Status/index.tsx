import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  ViewImage,
  ImageStatus,
  ViewTextStatus,
  TitleStatus,
  TimeStatus,
} from './styles';
import { Ionicons } from '@expo/vector-icons';

export const Status = () => {
  return (
    <Container>
      <ViewImage>
        <ImageStatus
          source={{
            uri: 'https://static-cse.canva.com/blob/183499/IMAGE-1.jpg',
          }}
        />
      </ViewImage>
      <ViewTextStatus>
        <TitleStatus>Steves Jobs</TitleStatus>
        <TimeStatus>Hoje 06:15</TimeStatus>
      </ViewTextStatus>
    </Container>
  );
};
