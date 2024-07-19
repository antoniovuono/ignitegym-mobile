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
import { useAuth } from '@hooks/useAuth';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updatedProfileSchema } from '@utils/schemas/updated-profile-schema';
import { AppError } from '@utils/errors/AppError';
import { api } from '@services/api';
import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

const PHOTO_SIZE = 148;

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
};

export function Profile() {
  const [photoLoading, setPhotoLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { user, updateUserProfile } = useAuth();
  const { colors, fontSizes, fonts } = useAppTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
    resolver: zodResolver(updatedProfileSchema),
  });

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

        const fileExtension = photoSelected.assets[0].uri.split('.').pop();

        const photoFile = {
          name: `${user.name}.${fileExtension}`.toLowerCase(),
          uri: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
        } as any;

        const userPhotoUploadForm = new FormData();
        userPhotoUploadForm.append('photo', photoFile);

        const avatarUpdatedResponse = await api.patch(
          '/users/avatar',
          userPhotoUploadForm,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        const userUpdated = user;

        userUpdated.avatar = avatarUpdatedResponse.data.avatar;

        await updateUserProfile(userUpdated);

        Alert.alert('Sucesso', 'Foto de perfil atualizada com sucesso');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setPhotoLoading(false);
    }
  }

  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsLoading(true);
      const userUpdated = user;
      userUpdated.name = data.name;

      await api.put('/users', data);

      await updateUserProfile(userUpdated);

      Alert.alert('Sucesso', 'Perfil atualizado com sucesso');
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível atualizar os dados. Tente novamente mais tarde.';

      Alert.alert('Erro', title);
    } finally {
      setIsLoading(false);
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
            <UserAvatar
              uri={
                user.avatar
                  ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
                  : defaultUserPhotoImg
              }
              size={PHOTO_SIZE}
            />
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
          <Controller
            control={control}
            name='name'
            render={({ field: { value, onChange } }) => (
              <Input
                type='secondary'
                placeholder='Nome'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='email'
            render={({ field: { value, onChange } }) => (
              <Input
                type='secondary'
                placeholder='Email'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
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

          <Controller
            control={control}
            name='old_password'
            render={({ field: { onChange } }) => (
              <Input
                type='secondary'
                placeholder='Senha antiga'
                secureTextEntry
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { onChange } }) => (
              <Input
                type='secondary'
                placeholder='Nova senha'
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='confirm_password'
            render={({ field: { onChange } }) => (
              <Input
                type='secondary'
                placeholder='Confirme a nova senha'
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.confirm_password?.message}
              />
            )}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button
            title='Atualizar'
            isLoading={isLoading}
            onPressed={handleSubmit(handleProfileUpdate)}
          />
        </View>
      </ScrollView>
    </>
  );
}
