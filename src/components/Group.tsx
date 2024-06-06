import { Pressable, PressableProps } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type Props = PressableProps & {
  name: string;
};

export function Group({ name, ...rest }: Props) {
  const { colors, fontSizes, fonts } = useAppTheme();

  return (
    <Pressable
      {...rest}
      style={{
        height: 43,
        width: 96,
        backgroundColor: colors.gray600,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        borderRadius: 4,
        overflow: 'hidden',
      }}
    >
      <Text
        style={{
          color: colors.gray200,
          textTransform: 'uppercase',
          fontFamily: fonts.heading.fontWeight,
          fontSize: fontSizes.xs,
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
}
