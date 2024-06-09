import { Center } from '@components/Center';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserAvatar } from '@components/UserAvatar';
import { ScrollView } from 'react-native';

export function Profile() {
  return (
    <>
      <ScreenHeader title='Perfil' />
      <ScrollView style={{ flex: 1 }}>
        <Center mt={30}>
          <UserAvatar url='https://github.com/antoniovuono.png' size={148} />
        </Center>
      </ScrollView>
    </>
  );
}
