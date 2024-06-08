import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { View } from 'react-native';

export function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />

      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Group name='costas' />
        <Group name='ombro' />
        <Group name='peito' />
      </View>
    </View>
  );
}
