import React from 'react';
import { ViewInput, Container, ButtonAudio, Input, IconCamera } from './styles';
import { AntDesign, Feather, Ionicons, Entypo } from '@expo/vector-icons';

export const BottomInputChat = () => {
  return (
    <Container>
      <ViewInput>
        <Entypo name="emoji-happy" size={25} color="#878A8F" />
        <Input placeholder={'Digite uma mensagem'} />
        <Feather name="paperclip" size={25} color="#878A8F" />
        <IconCamera name="camera" size={25} color="#878A8F" />
      </ViewInput>
      <ButtonAudio>
        <Ionicons name="mic" size={27} color="white" />
      </ButtonAudio>
    </Container>
  );
};
