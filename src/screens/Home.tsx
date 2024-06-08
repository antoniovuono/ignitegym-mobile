import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Bíceps',
    'Tríceps',
    'Ombro',
  ]);
  const [selectedGroup, setSelectedGroup] = useState('peito');

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />

      <View
        style={{
          flexDirection: 'row',
          padding: 14,
        }}
      >
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={selectedGroup === item}
              onPress={() => setSelectedGroup(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
