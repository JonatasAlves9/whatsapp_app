import React from 'react';
import { Button } from './styles';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';

type Props = {
  icon: any;
};

export const BottomButton = ({ icon }: Props) => {
  return (
    <Button>
      <Ionicons name={icon} size={27} color="#fff" />
    </Button>
  );
};
