import { Button as PaperButton } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type ButtonProps = {
  title: string;
  isLoading: boolean;
};

export function Button({ title, isLoading }: ButtonProps) {
  const { colors, sizes } = useAppTheme();

  return (
    <PaperButton
      mode='elevated'
      onPress={() => {}}
      buttonColor={colors.green700}
      textColor={colors.white}
      loading={isLoading}
      style={{
        borderRadius: 6,
        justifyContent: 'center',
        height: sizes[14],
      }}
    >
      {!isLoading && title}
    </PaperButton>
  );
}
