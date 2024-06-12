import { Center } from '@components/Center';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserAvatar } from '@components/UserAvatar';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Skeleton } from 'moti/skeleton';
import { useAppTheme } from 'src/theme';
import { useState } from 'react';
import { Text } from 'react-native-paper';
import { Input } from '@components/Input';

const PHOTO_SIZE = 148;

export function Profile() {
  const [photoLoading, setPhotoLoading] = useState(false);
  const { colors, fontSizes, fonts } = useAppTheme();

  return (
    <>
      <ScreenHeader title='Perfil' />
      <ScrollView style={{ flex: 1, paddingHorizontal: 14 }}>
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

          <TouchableOpacity>
            <Text
              style={{
                color: colors.green500,
                fontSize: fontSizes.md,
                fontFamily: fonts.heading.fontFamily,
                marginTop: 14,
                marginRight: 20,
              }}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
        </Center>

        <View
          style={{
            marginTop: 36,
          }}
        >
          <Input type='secondary' placeholder='Antonio Sampaio De Vuono' />

          <Input
            type='secondary'
            placeholder='antoniosvuono@icloud.com'
            disabled
          />
        </View>
      </ScrollView>
    </>
  );
}
