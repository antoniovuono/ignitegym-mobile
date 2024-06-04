import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { useAppTheme } from 'src/theme';

export function Routes() {
  const { colors } = useAppTheme();
  const theme = DefaultTheme;

  theme.colors.background = colors.gray700;

  return (
    <NavigationContainer theme={theme}>
      <AuthRoutes />
    </NavigationContainer>
  );
}
