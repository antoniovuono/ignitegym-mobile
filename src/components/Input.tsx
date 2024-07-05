import { View } from 'react-native';
import { TextInput, TextInputProps, Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type InputsProps = TextInputProps & {
  type: 'primary' | 'secondary';
  errorMessage?: string | null;
};

export function Input({ errorMessage, type, ...rest }: InputsProps) {
  const { colors, fontSizes } = useAppTheme();

  return (
    <View style={{ marginBottom: 10 }}>
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
          borderRadius: 6,
        }}
      />

      {errorMessage && (
        <Text
          style={{
            color: colors.red500,
            fontSize: fontSizes.xs,
            marginTop: 7,
          }}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
