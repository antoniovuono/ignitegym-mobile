import React from 'react';
import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GluestackUIProvider>
      <Box width="100%" flex={1} justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </GluestackUIProvider>
  );
}
