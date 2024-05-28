import { ActivityIndicator } from 'react-native-paper';
import { useAppTheme } from 'src/theme';
import { Center } from './Center';

export function Loading() {
  const { colors } = useAppTheme();

  return (
    <Center flex={1} bg={colors.gray700}>
      <ActivityIndicator
        animating={true}
        color={colors.green500}
        size='small'
      />
    </Center>
  );
}
