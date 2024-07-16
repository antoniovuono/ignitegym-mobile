import { TouchableOpacity, View, Image, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAppTheme } from 'src/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import BodySvg from '@assets/body.svg';
import { Card, Text } from 'react-native-paper';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';
import { AppError } from '@utils/errors/AppError';
import { api } from '@services/api';
import { useEffect, useState } from 'react';
import { ExerciseDTO } from '@dtos/ExerciseDTO';
import { Loading } from '@components/Loading';

type RouteParamsProps = {
  exerciseId: string;
};

export function Exercise() {
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const [isLoading, setIsLoading] = useState(true);
  const [sendingRegister, setSendingRegister] = useState(false);

  const { colors, fontSizes, fonts } = useAppTheme();

  const { goBack, navigate } = useNavigation<AppNavigatorRoutesProps>();

  const route = useRoute();

  const { exerciseId } = route.params as RouteParamsProps;

  function handleGoBack() {
    goBack();
  }

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/${exerciseId}`);

      setExercise(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Erro ao buscar detalhes do exercício';

      Alert.alert(title, 'Tente novamente mais tarde');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleExerciseHistoryRegister() {
    try {
      setSendingRegister(true);

      await api.post('/history', { exercise_id: exerciseId });

      Alert.alert('Exercício registrado com sucesso');

      navigate('history');
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Não foi possível registrar o exercício';

      Alert.alert(title, 'Tente novamente mais tarde');
    } finally {
      setSendingRegister(false);
    }
  }

  useEffect(() => {
    if (exerciseId) {
      fetchExerciseDetails();
    }
  }, [exerciseId]);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.gray600,
              paddingTop: 52,
              paddingHorizontal: 32,
              paddingBottom: 32,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <TouchableOpacity onPress={handleGoBack}>
                <Feather name='arrow-left' size={24} color={colors.green500} />
              </TouchableOpacity>
              <Text
                style={{
                  color: colors.gray100,
                  fontSize: fontSizes.lg,
                  fontFamily: fonts.heading.fontFamily,
                  marginTop: 10,
                  flexShrink: 1,
                }}
              >
                {exercise.name}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}
            >
              <BodySvg />
              <Text
                style={{
                  color: colors.gray100,
                  fontSize: fontSizes.sm,
                  fontFamily: fonts.body.fontFamily,
                  marginLeft: 4,
                }}
              >
                {exercise.group}
              </Text>
            </View>
          </View>
          <View style={{ padding: 14 }}>
            <Image
              source={{
                uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`,
              }}
              height={384}
              borderRadius={6}
              style={{
                marginBottom: 16,
              }}
            />

            <View>
              <Card
                contentStyle={{
                  backgroundColor: colors.gray600,
                  borderRadius: 8,
                  padding: 16,
                }}
              >
                <Card.Content
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 24,
                  }}
                >
                  <Card.Content
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <SeriesSvg />
                    <Text
                      style={{
                        color: colors.gray100,
                        fontFamily: fonts.body.fontFamily,
                        fontSize: fontSizes.md,
                        marginLeft: 8,
                      }}
                    >
                      3 séries
                    </Text>
                  </Card.Content>

                  <Card.Content
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <RepetitionsSvg />
                    <Text
                      style={{
                        color: colors.gray100,
                        fontFamily: fonts.body.fontFamily,
                        fontSize: fontSizes.md,
                        marginLeft: 8,
                      }}
                    >
                      12 repetições
                    </Text>
                  </Card.Content>
                </Card.Content>

                <Button
                  title='Marcar como realizado'
                  isLoading={sendingRegister}
                  onPressed={handleExerciseHistoryRegister}
                />
              </Card>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
