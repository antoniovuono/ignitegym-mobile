import { MD3LightTheme as DefaultTheme, useTheme } from 'react-native-paper';

export type AppTheme = typeof theme;
export const useAppTheme = () => useTheme<AppTheme>();

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ocean: '#3498db',
    banana: '#f1c40f',
    vulcan: '#a1b2c3',
    green700: '#00875F',
    green500: '#00B37E',
    gray700: '#121214',
    gray600: '#202024',
    gray500: '#29292E',
    gray400: '#323238',
    gray300: '#7C7C8A',
    gray200: '#C4C4CC',
    gray100: '#E1E1E6',
    white: '#FFFFFF',
    red500: '#F75A68',
  },
  fonts: {
    ...DefaultTheme.fonts,
    body: {
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'normal',
    },
    heading: {
      fontFamily: 'Roboto_700Bold',
      fontWeight: 'normal',
    },
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
};
