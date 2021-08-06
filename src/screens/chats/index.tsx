import React from 'react';
import { Container } from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Chat } from '../../components/Chat';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomButton } from '../../components/BottonButton';

export const ChatScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Chat
          title={'Jônatas Alves'}
          message={'Daqui a pouco'}
          messageIsRead={true}
          messageIsSend={false}
          messageUser={true}
          time={'23:59'}
        />
        <Chat
          title={'Jônatas Alves'}
          message={'Daqui a pouco'}
          messageIsRead={false}
          messageIsSend={true}
          messageUser={true}
          time={'23:59'}
        />
        <Chat
          title={'Jônatas Alves'}
          message={'Daqui a pouco'}
          messageIsRead={false}
          messageIsSend={false}
          messageUser={true}
          time={'23:59'}
        />
      </ScrollView>
      <BottomButton />
    </Container>
  );
};
