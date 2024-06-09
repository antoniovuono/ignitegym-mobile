import { ExerciseCard } from '@components/ExerciseCard';
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
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terras',
  ]);

  const { colors, fontSizes, fonts } = useAppTheme();

  return (
    <>
      <HomeHeader />
      <View style={{ flex: 1, padding: 14 }}>
        <View>
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
            {exercises.length}
          </Text>
        </View>

        <FlatList
          style={{ marginTop: 14 }}
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}
