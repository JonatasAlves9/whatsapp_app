import React from 'react';
import {
  Container,
  Avatar,
  ViewCenter,
  TitleName,
  Message,
  ViewEnd,
  Time,
  Button,
  ViewMessage,
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  message: string;
  time: string;
  messageIsRead: boolean;
  messageUser: boolean;
  messageIsSend: boolean;
};

export const Chat = ({
  title,
  message,
  time,
  messageIsRead,
  messageUser,
  messageIsSend,
}: Props) => {
  return (
    <Container>
      <Avatar
        source={{
          uri: 'http://s2.glbimg.com/0qzxjDYGdG3DA87NEvQtv3Xy_hqhwJt9YRvdwSPmw0pIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/08/19/oliver-peoples.jpg',
        }}
      />
      <Button>
        <ViewCenter>
          <TitleName>{title}</TitleName>
          <ViewMessage>
            {messageIsRead ? (
              <Ionicons name={'checkmark-done'} size={20} color="#5FA8C9" />
            ) : (
              <Ionicons
                name={messageIsSend ? 'checkmark-done' : 'checkmark-outline'}
                size={20}
                color="#999"
              />
            )}

            <Message>{message}</Message>
          </ViewMessage>
        </ViewCenter>
        <ViewEnd>
          <Time>{time}</Time>
        </ViewEnd>
      </Button>
    </Container>
  );
};
