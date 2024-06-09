import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { useState } from 'react';
import { SectionList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '26.08.22',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '27.08.22',
      data: ['Puxada frontal'],
    },
  ]);

  const { colors, fontSizes, fonts } = useAppTheme();

  return (
    <>
      <ScreenHeader title='Histórico de Exercícios' />
      <View style={{ flex: 1, padding: 14 }}>
        <SectionList
          sections={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <HistoryCard />}
          renderSectionHeader={({ section }) => (
            <Text
              style={{
                color: colors.gray200,
                fontSize: fontSizes.md,
                fontFamily: fonts.heading.fontFamily,
                paddingTop: 40,
                paddingBottom: 12,
              }}
            >
              {section.title}
            </Text>
          )}
          contentContainerStyle={
            exercises.length === 0 && { flex: 1, justifyContent: 'center' }
          }
          ListEmptyComponent={
            <Text
              style={{
                color: colors.gray100,
                textAlign: 'center',
              }}
            >
              Não há exercícios registrados ainda. {'\n'}
              Vamos treinar hoje ?
            </Text>
          }
        />
      </View>
    </>
  );
}
