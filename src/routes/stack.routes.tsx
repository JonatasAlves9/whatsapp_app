import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TopTabs } from './topTabs.routes';
import { Chat } from '../components/Chat';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={TopTabs} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
