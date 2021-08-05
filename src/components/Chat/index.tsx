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
} from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Chat = () => {
  return (
    <Container>
      <Avatar
        source={{
          uri: 'http://s2.glbimg.com/0qzxjDYGdG3DA87NEvQtv3Xy_hqhwJt9YRvdwSPmw0pIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/08/19/oliver-peoples.jpg',
        }}
      />
      <Button>
        <ViewCenter>
          <TitleName>Jônatas Alves</TitleName>
          <Message>Deixa pra la</Message>
        </ViewCenter>
        <ViewEnd>
          <Time>23:59</Time>
        </ViewEnd>
      </Button>
    </Container>
  );
};
