import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { Loading } from '@components/Loading';
import { ExerciseDTO } from '@dtos/ExerciseDTO';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { api } from '@services/api';
import { AppError } from '@utils/errors/AppError';
import { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';
import { set } from 'zod';

export function Home() {
  const [groups, setGroups] = useState<string[]>([]);
  const [selectedGroup, setSelectedGroup] = useState('peito');
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { colors, fontSizes, fonts } = useAppTheme();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigate('exercise');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const response = await api.get('/groups');

      setGroups(response.data);
    } catch (error) {
      const isAppError =
        error instanceof AppError
          ? error.message
          : 'Não foi possível carregar os grupos de exercícios';

      Alert.alert('Erro', isAppError);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchExercisesByGroup() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/bygroup/${selectedGroup}`);

      setExercises(response.data);
    } catch (error) {
      const isAppError =
        error instanceof AppError
          ? error.message
          : 'Não foi possível carregar os exercícios';

      Alert.alert('Erro', isAppError);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [selectedGroup]),
  );

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

        {isLoading ? (
          <Loading />
        ) : (
          <>
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
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ExerciseCard onPress={handleOpenExerciseDetails} data={item} />
              )}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </View>
    </>
  );
}
