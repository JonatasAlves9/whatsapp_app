import React from 'react';
import {
  Container,
  Avatar,
  ViewName,
  Name,
  Status,
  ViewIcons,
  Icons,
  IconsBack,
  Button,
} from './styles';
import { StatusBar } from 'expo-status-bar';

export const HeaderChat = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#054C44" style="light" />
      <Button>
        <IconsBack name={'arrowleft'} size={30} color={'white'} />
      </Button>
      <Avatar
        source={{
          uri: 'https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4',
        }}
      />
      <ViewName>
        <Name>Jônatas Alves</Name>
        <Status>Online</Status>
      </ViewName>
      <ViewIcons>
        <Button>
          <Icons name="videocam" size={25} color="white" />
        </Button>
        <Button>
          <Icons name={'camera'} size={25} color={'white'} />
        </Button>
        <Button>
          <Icons name={'ellipsis-vertical'} size={25} color={'white'} />
        </Button>
      </ViewIcons>
    </Container>
  );
};
