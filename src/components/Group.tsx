import { Button } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type Props = {
  name: string;
  onPress?: () => void;
  isActive: boolean;
};

export function Group({ name, onPress, isActive, ...rest }: Props) {
  const { colors, fontSizes, fonts } = useAppTheme();

  return (
    <Button
      {...rest}
      mode={isActive ? 'outlined' : 'contained'}
      uppercase
      onPress={onPress}
      buttonColor={colors.gray500}
      textColor={colors.gray200}
      contentStyle={{
        justifyContent: 'center',
        height: 43,
        width: 96,
      }}
      labelStyle={{
        fontFamily: fonts.body.fontFamily,
        fontSize: fontSizes.xs,
        color: isActive ? colors.green500 : colors.gray200,
      }}
      style={{
        borderRadius: 4,
        borderColor: colors.green500,
        marginRight: 12,
      }}
    >
      {name}
    </Button>
  );
}
