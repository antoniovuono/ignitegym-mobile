import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type ScreenHeaderProps = {
  title: string;
};

export function ScreenHeader({ title }: ScreenHeaderProps) {
  const { colors, fontSizes, fonts } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.gray600,
        paddingTop: 68,
        paddingBottom: 24,
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: fontSizes.xl,
          color: colors.gray100,
          fontFamily: fonts.heading.fontFamily,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
