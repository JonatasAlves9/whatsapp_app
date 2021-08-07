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
          uri: 'https://media.gettyimages.com/photos/portrait-of-a-smiling-young-man-picture-id1040727954?s=612x612',
        }}
      />
      <ViewName>
        <Name>Jônatas Alves</Name>
        <Status>Online</Status>
      </ViewName>
      <ViewIcons>
        <Button>
          <Icons name="videocam" size={22} color="white" />
        </Button>
        <Button>
          <Icons name={'camera'} size={22} color={'white'} />
        </Button>
        <Button>
          <Icons name={'ellipsis-vertical'} size={22} color={'white'} />
        </Button>
      </ViewIcons>
    </Container>
  );
};
