import { Center } from '@components/Center';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserAvatar } from '@components/UserAvatar';
import { ScrollView } from 'react-native';
import { Skeleton } from 'moti/skeleton';
import { useAppTheme } from 'src/theme';
import { useState } from 'react';

const PHOTO_SIZE = 148;

export function Profile() {
  const [photoLoading, setPhotoLoading] = useState(false);
  const { colors } = useAppTheme();

  return (
    <>
      <ScreenHeader title='Perfil' />
      <ScrollView style={{ flex: 1 }}>
        <Center mt={30}>
          <Skeleton
            show={photoLoading}
            height={PHOTO_SIZE}
            width={PHOTO_SIZE}
            radius='round'
            colors={[colors.gray500, colors.gray400]}
          >
            <UserAvatar
              url='https://github.com/antoniovuono.png'
              size={PHOTO_SIZE}
            />
          </Skeleton>
        </Center>
      </ScrollView>
    </>
  );
}
