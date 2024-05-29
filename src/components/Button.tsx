import { Button as PaperButton } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type ButtonProps = {
  title: string;
  isLoading: boolean;
  variant?: 'primary' | 'secondary';
};

export function Button({ title, isLoading, variant = 'primary' }: ButtonProps) {
  const { colors, sizes } = useAppTheme();

  return (
    <PaperButton
      mode={variant === 'primary' ? 'contained' : 'outlined'}
      onPress={() => {}}
      buttonColor={variant === 'primary' ? colors.green700 : 'transparent'}
      textColor={variant === 'primary' ? colors.white : colors.green700}
      loading={isLoading}
      style={{
        borderRadius: 6,
        justifyContent: 'center',
        height: sizes[14],
        borderColor: variant === 'secondary' ? colors.green700 : 'transparent',
      }}
    >
      {!isLoading && title}
    </PaperButton>
  );
}
