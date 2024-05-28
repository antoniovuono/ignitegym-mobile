import { TextInput, TextInputProps } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

export function Input({ ...rest }: TextInputProps) {
  const { colors, sizes } = useAppTheme();

  return (
    <TextInput
      {...rest}
      autoCapitalize='none'
      textColor={colors.white}
      activeUnderlineColor={colors.green500}
      placeholderTextColor={colors.gray300}
      style={{
        backgroundColor: colors.gray700,
        height: sizes[14],
        padding: 4,
        marginBottom: 10,
        borderRadius: 6,
      }}
    />
  );
}
