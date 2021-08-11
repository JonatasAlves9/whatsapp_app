import React from 'react';
import { Container } from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Chat } from '../../components/Chat';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomButton } from '../../components/BottonButton';
import { HeaderChat } from '../../components/HeaderChat';
import { BottomInputChat } from '../../components/BottomInputChat';

export const CallScreen = () => {
  return (
    <Container>
      <BottomButton icon={'call'} />
    </Container>
  );
};
