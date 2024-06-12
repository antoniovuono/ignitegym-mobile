import { TextInput, TextInputProps } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type InputsProps = TextInputProps & {
  type: 'primary' | 'secondary';
};

export function Input({ type, ...rest }: InputsProps) {
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
        backgroundColor: type === 'primary' ? colors.gray700 : colors.gray600,
        height: 50,
        padding: 4,
        marginBottom: 10,
        borderRadius: 6,
      }}
    />
  );
}
