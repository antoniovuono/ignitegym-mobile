import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Bíceps',
    'Tríceps',
    'Ombro',
  ]);
  const [selectedGroup, setSelectedGroup] = useState('peito');

  const { colors, fontSizes, fonts } = useAppTheme();

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />

      <View
        style={{
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 40,
          }}
        >
          <Text
            style={{
              color: colors.gray200,
              fontSize: fontSizes.md,
              fontFamily: fonts.body.fontFamily,
            }}
          >
            Exercícios
          </Text>

          <Text
            style={{
              color: colors.gray200,
              fontSize: fontSizes.sm,
              fontFamily: fonts.body.fontFamily,
            }}
          >
            4
          </Text>
        </View>
      </View>
    </View>
  );
}
