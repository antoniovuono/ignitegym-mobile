import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useAppTheme } from 'src/theme';

import { useAuth } from '@hooks/useAuth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { Loading } from '@components/Loading';

export function Routes() {
  const { colors } = useAppTheme();
  const { user, isLoadingUserStorageDate } = useAuth();

  const theme = DefaultTheme;

  theme.colors.background = colors.gray700;

  if (isLoadingUserStorageDate) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={theme}>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
