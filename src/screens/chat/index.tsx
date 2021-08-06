import React from 'react';
import { Container } from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Chat } from '../../components/Chat';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomButton } from '../../components/BottonButton';
import { HeaderChat } from '../../components/HeaderChat';

export const ChatScreen = () => {
  return (
    <Container>
      <ScrollView>
        <HeaderChat />
      </ScrollView>
    </Container>
  );
};
