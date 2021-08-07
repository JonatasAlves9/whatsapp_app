import React from 'react';
import { Container, ImageBackground } from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Chat } from '../../components/Chat';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomButton } from '../../components/BottonButton';
import { HeaderChat } from '../../components/HeaderChat';
import { BottomInputChat } from '../../components/BottomInputChat';

export const ChatScreen = () => {
  return (
    <Container>
      <HeaderChat />
      <ImageBackground
        source={{
          uri: 'https://s-media-cache-ak0.pinimg.com/564x/2d/8e/fc/2d8efcae0ab119d4cd23a40fd1ba5364.jpg',
        }}
      >
        <ScrollView></ScrollView>
        <BottomInputChat></BottomInputChat>
      </ImageBackground>
    </Container>
  );
};
