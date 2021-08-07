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
  onPress: () => void;
};

export const Chat = ({
  title,
  message,
  time,
  messageIsRead,
  messageUser,
  messageIsSend,
  onPress,
}: Props) => {
  return (
    <Container>
      <Avatar
        source={{
          uri: 'https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4',
        }}
      />
      <Button onPress={onPress}>
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
