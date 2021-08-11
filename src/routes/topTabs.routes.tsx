import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ChatScreen } from '../screens/chats';
import StatusScreen from '../screens/status';
import { CameraScreen } from '../screens/camera';
import { CallScreen } from '../screens/calls';
import { Header } from '../components/Header';

import { AntDesign, Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName={'Conversas'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'C') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <Ionicons name="camera" size={24} color="white" />;
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#075E55',
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#969CA1',
          tabStyle: {},
          labelStyle: {
            fontSize: 11,
            color: '#fff',
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
        {/* <Tab.Screen
          name="C"
          component={CameraScreen}
          options={{
            tabBarLabel: '',
          }}
        /> */}
        <Tab.Screen name="Conversas" component={ChatScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Chamadas" component={CallScreen} />
      </Tab.Navigator>
    </>
  );
}
