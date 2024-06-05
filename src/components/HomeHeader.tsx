import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

export function HomeHeader() {
  const { colors, fontSizes, fonts } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.gray600,
        width: '100%',
        paddingTop: 64,
        paddingBottom: 26,
        paddingHorizontal: 33,
      }}
    >
      <View>
        <Text
          style={{
            color: colors.gray100,
            fontSize: fontSizes.md,
            fontFamily: fonts.body.fontFamily,
          }}
        >
          Olá,
        </Text>
        <Text
          style={{
            color: colors.gray100,

            fontSize: fontSizes.md,
            fontFamily: fonts.heading.fontFamily,
          }}
        >
          Antonio!
        </Text>
      </View>
    </View>
  );
}
