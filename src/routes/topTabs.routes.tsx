import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatScreen from '../screens/chats';
import StatusScreen from '../screens/status';
import CameraScreen from '../screens/camera';
import CallsScreen from '../screens/calls';
import { Header } from '../components/Header';

import { AntDesign, Ionicons } from '@expo/vector-icons';

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
            fontSize: 11,
          },
          showIcon: true,
          iconStyle: {
            width: 'auto',
            height: 5,
          },
          indicatorStyle: {
            backgroundColor: '#fff',
          },
          allowFontScaling: true,
        }}
      >
        <Tab.Screen
          name="C"
          component={CameraScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Ionicons name="camera" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen name="Conversas" component={ChatScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Chamadas" component={CallsScreen} />
      </Tab.Navigator>
    </>
  );
}
