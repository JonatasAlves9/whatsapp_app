import React from 'react';
import { Container } from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Chat } from '../../components/Chat';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomButton } from '../../components/BottonButton';

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const ChatScreen = ({ navigation }: Props) => {
  const handleChat = () => {
    navigation.navigate('Chat');
  };

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
          onPress={handleChat}
        />
      </ScrollView>
      <BottomButton icon={'md-chatbox-ellipses'} />
    </Container>
  );
};
