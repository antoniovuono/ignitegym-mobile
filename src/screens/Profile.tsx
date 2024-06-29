import { Center } from '@components/Center';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserAvatar } from '@components/UserAvatar';
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native';
import { Skeleton } from 'moti/skeleton';
import { useAppTheme } from 'src/theme';
import { useState } from 'react';
import { Text } from 'react-native-paper';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const PHOTO_SIZE = 148;

export function Profile() {
  const [photoLoading, setPhotoLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/antoniovuono.png',
  );

  const { colors, fontSizes, fonts } = useAppTheme();

  async function handleUserPhotoSelect() {
    setPhotoLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) return;

      if (photoSelected.assets[0].uri) {
        // usamos o fileSystem para checar o tamanho da imagem
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri,
        );

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
          Alert.alert('Erro', 'A imagem deve ter no máximo 5MB');
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setPhotoLoading(false);
    }
  }

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
            <UserAvatar url={userPhoto} size={PHOTO_SIZE} />
          </Skeleton>

          <TouchableOpacity onPress={handleUserPhotoSelect}>
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

        <View
          style={{
            marginTop: 36,
          }}
        >
          <Text
            style={{
              color: colors.gray200,
              fontSize: fontSizes.md,
              fontFamily: fonts.heading.fontFamily,
              marginBottom: 10,
            }}
          >
            Alterar Senha
          </Text>

          <Input type='secondary' placeholder='Senha antiga' secureTextEntry />
          <Input type='secondary' placeholder='Nova senha' secureTextEntry />
          <Input
            type='secondary'
            placeholder='Confirme a nova senha'
            secureTextEntry
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button title='Atualizar' isLoading={false} />
        </View>
      </ScrollView>
    </>
  );
}
