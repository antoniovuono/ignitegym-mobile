import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { View } from 'react-native';

export function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />

      <Group name='costas' />
    </View>
  );
}
