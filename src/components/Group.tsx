import { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type Props = {
  name: string;
};

export function Group({ name, ...rest }: Props) {
  const [selected, setSelected] = useState(false);
  const { colors, fontSizes, fonts } = useAppTheme();

  function handleSelected() {
    setSelected((prevState) => !prevState);
  }

  return (
    <Button
      mode={selected ? 'outlined' : 'contained'}
      uppercase
      onPressIn={handleSelected}
      onPressOut={handleSelected}
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
        color: colors.gray200,
      }}
      style={{
        borderRadius: 4,
        marginLeft: 12,
        borderColor: colors.green500,
      }}
    >
      {name}
    </Button>
  );
}
