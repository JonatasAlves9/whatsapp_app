import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TopTabs } from './topTabs.routes';
export function Routes() {
  return (
    <NavigationContainer>
      <TopTabs />
    </NavigationContainer>
  );
}
