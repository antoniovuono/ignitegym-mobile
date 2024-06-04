import React from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { theme } from 'src/theme';

import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <PaperProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {!fontsLoaded ? <Loading /> : <Routes />}
    </PaperProvider>
  );
}
