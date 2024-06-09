import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { View } from 'react-native';

export function History() {
  return (
    <>
      <ScreenHeader title='Histórico de Exercícios' />
      <View style={{ flex: 1, padding: 14 }}>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </View>
    </>
  );
}
