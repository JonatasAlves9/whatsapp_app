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
          uri: 'http://colorindonuvens.com/wp-content/uploads/2020/03/Wallpaper-PretoBranco-ColorindoNuvens-7.jpg',
        }}
      >
        <ScrollView></ScrollView>
        <BottomInputChat></BottomInputChat>
      </ImageBackground>
    </Container>
  );
};
