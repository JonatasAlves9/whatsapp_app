import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatScreen from '../screens/chats';
import StatusScreen from '../screens/status';
import CameraScreen from '../screens/camera';
import CallsScreen from '../screens/calls';
import { Header } from '../components/Header';

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <>
      <Header />
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#075E55',
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#969CA1',
          labelStyle: {
            fontSize: 11.3,
          },
          indicatorStyle: {
            backgroundColor: '#fff',
          },
          allowFontScaling: false,
        }}
      >
        <Tab.Screen name="C" component={CameraScreen} />
        <Tab.Screen name="Conversas" component={ChatScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Chamadas" component={CallsScreen} />
      </Tab.Navigator>
    </>
  );
}
