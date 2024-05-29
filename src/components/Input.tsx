import { TextInput, TextInputProps } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

export function Input({ ...rest }: TextInputProps) {
  const { colors } = useAppTheme();

  return (
    <TextInput
      {...rest}
      autoCapitalize='none'
      textColor={colors.white}
      activeUnderlineColor={colors.green500}
      underlineColor={colors.gray300}
      placeholderTextColor={colors.gray300}
      style={{
        backgroundColor: colors.gray700,
        height: 50,
        padding: 4,
        marginBottom: 10,
        borderRadius: 6,
      }}
    />
  );
}
