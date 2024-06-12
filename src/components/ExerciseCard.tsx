import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { useAppTheme } from 'src/theme';

export function ExerciseCard({ ...rest }: TouchableOpacityProps) {
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
          uri: 'https://uploads.metropoles.com/wp-content/uploads/2023/02/17143449/GettyImages-946365998-1.jpg',
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
          Puxada frontal
        </Text>
        <Text
          style={{
            color: colors.gray200,
            fontFamily: fonts.body.fontFamily,
            fontSize: fontSizes.sm,
            marginTop: 2,
          }}
        >
          3 séries x 12 repetições
        </Text>
      </View>

      <Entypo name='chevron-right' size={24} color={colors.gray300} />
    </TouchableOpacity>
  );
}
