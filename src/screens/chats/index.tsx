import React from 'react';
import { Container } from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Chat } from '../../components/Chat';

export const ChatScreen = () => {
  return (
    <Container>
      <Chat />
      <Chat />
    </Container>
  );
};
