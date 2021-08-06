import React from 'react';
import { Button } from './styles';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';

export const BottomButton = () => {
  return (
    <Button>
      <Ionicons name="md-chatbox-ellipses" size={27} color="#fff" />
    </Button>
  );
};
