import { Input as TextInput, InputField } from '@gluestack-ui/themed';
import { TextInputProps } from 'react-native';

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput variant='outline' bg='$gray700' h='$14' borderWidth={0} px='$1'>
      <InputField
        color='$white'
        fontFamily='$body'
        fontSize='$md'
        placeholderTextColor='$gray300'
        autoCapitalize='none'
        {...rest}
      />
    </TextInput>
  );
}
