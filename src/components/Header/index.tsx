import React from 'react';
import {
  Container,
  Title,
  IconsView,
  IconSearch,
  IconMore,
  ButtonIcon,
} from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';

export const Header = () => {
  return (
    <Container>
      <Title>WhatsApp</Title>
      <IconsView>
        <ButtonIcon>
          <IconSearch name="search1" size={24} color="white" />
        </ButtonIcon>
        <ButtonIcon>
          <IconMore name="more-vertical" size={24} color="white" />
        </ButtonIcon>
      </IconsView>
    </Container>
  );
};
