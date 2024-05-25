import React from 'react';
import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {!fontsLoaded ? (
        <Loading />
      ) : (
        <Box width="100%" flex={1} justifyContent="center" alignItems="center">
          <Text>Open up App.js to start working on your app!</Text>
        </Box>
      )}
    </GluestackUIProvider>
  );
}
