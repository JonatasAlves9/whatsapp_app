import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#054C44" style="light" />
      <Routes />
    </>
  );
}
