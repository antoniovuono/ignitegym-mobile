import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { Exercise } from '@screens/Exercise';
import { History } from '@screens/History';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';
import { useAppTheme } from 'src/theme';

type AppRoutesProps = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: { exerciseId: string };
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
  const { colors } = useAppTheme();

  const iconSize = 28;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green500,
        tabBarInactiveTintColor: colors.gray200,
        tabBarStyle: {
          backgroundColor: colors.gray600,
          borderTopWidth: 0,
          height: 96,
          paddingBottom: 10,
          paddingTop: 6,
        },
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name='history'
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name='exercise'
        component={Exercise}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
