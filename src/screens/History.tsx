import { ScreenHeader } from '@components/ScreenHeader';
import { View } from 'react-native';

export function History() {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title='Histórico de Exercícios' />
    </View>
  );
}
