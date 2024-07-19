import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryByDayDTO } from '@dtos/HistoryByDayDTO';
import { HistoryDTO } from '@dtos/HistoryDTO';
import { useFocusEffect } from '@react-navigation/native';
import { api } from '@services/api';
import { AppError } from '@utils/errors/AppError';
import { useCallback, useState } from 'react';
import { Alert, SectionList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

export function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);

  const { colors, fontSizes, fonts } = useAppTheme();

  async function fetchHistory() {
    try {
      setIsLoading(true);
      const response = await api.get('/history');

      setExercises(response.data);
    } catch (error) {
      const isAppError =
        error instanceof AppError
          ? error.message
          : 'Não foi possível carregar o histórico';

      Alert.alert('Erro', isAppError);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, []),
  );

  return (
    <>
      <ScreenHeader title='Histórico de Exercícios' />
      <View style={{ flex: 1, padding: 14 }}>
        <SectionList
          sections={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HistoryCard data={item} />}
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
