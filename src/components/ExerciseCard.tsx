import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { useAppTheme } from 'src/theme';
import { ExerciseDTO } from '@dtos/ExerciseDTO';
import { api } from '@services/api';

type Props = TouchableOpacityProps & {
  data: ExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
  const { colors, fonts, fontSizes } = useAppTheme();

  return (
    <TouchableOpacity
      {...rest}
      style={{
        backgroundColor: colors.gray500,
        width: '100%',
        height: 83,
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 12,
      }}
    >
      <Image
        source={{
          uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}`,
        }}
        width={67}
        height={67}
        borderRadius={6}
      />

      <View
        style={{
          marginLeft: 16,
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontFamily: fonts.heading.fontFamily,
            fontSize: fontSizes.lg,
          }}
        >
          {data.name}
        </Text>
        <Text
          style={{
            color: colors.gray200,
            fontFamily: fonts.body.fontFamily,
            fontSize: fontSizes.sm,
            marginTop: 2,
          }}
        >
          {data.series} séries x {data.repetitions} repetições
        </Text>
      </View>

      <Entypo name='chevron-right' size={24} color={colors.gray300} />
    </TouchableOpacity>
  );
}
