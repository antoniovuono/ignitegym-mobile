import { Alert, Image, ScrollView, View } from 'react-native';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { useAppTheme } from 'src/theme';
import { Text } from 'react-native-paper';
import { Center } from '@components/Center';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, SignUpSchemaTypes } from '@utils/schemas/sign-up-schema';
import { api } from '@services/api';
import { AppError } from '@utils/errors/AppError';
import { useState } from 'react';
import { useAuth } from '@hooks/useAuth';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const { colors, sizes, fontSizes, fonts } = useAppTheme();
  const { goBack } = useNavigation();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaTypes>({
    resolver: zodResolver(SignUpSchema),
  });

  function handleGoBack() {
    goBack();
  }

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
      setIsLoading(true);
      await api.post('/users', {
        name,
        email,
        password,
      });

      await signIn(email, password);
    } catch (error) {
      setIsLoading(false);

      if (error instanceof AppError) {
        return Alert.alert(error.message);
      }

      return Alert.alert('Erro ao criar conta. Tente novamente.');
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 30,
        }}
      >
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          style={{ position: 'absolute' }}
        />

        <Center my={sizes[33]}>
          <LogoSvg />

          <Text
            style={{
              color: colors.gray100,
              fontSize: fontSizes.sm,
              fontFamily: fonts.body.fontFamily,
            }}
          >
            Treine sua mente e o seu corpo.
          </Text>
        </Center>

        <Center mb={15}>
          <Text
            style={{
              fontSize: fontSizes.xl,
              fontFamily: fonts.heading.fontFamily,
              color: colors.gray100,
            }}
          >
            Crie sua conta
          </Text>
        </Center>

        <Controller
          control={control}
          name='name'
          render={({ field: { onChange, value } }) => (
            <Input
              type='primary'
              placeholder='Name'
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='email'
          rules={{
            required: 'Email é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              type='primary'
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, value } }) => (
            <Input
              type='primary'
              placeholder='Senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='confirmPassword'
          render={({ field: { onChange, value } }) => (
            <Input
              type='primary'
              placeholder='Confirmar Senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
              errorMessage={errors.confirmPassword?.message}
              onSubmitEditing={handleSubmit(handleSignUp)}
            />
          )}
        />

        <View style={{ marginTop: 5 }}>
          <Button
            title='Criar e Acessar'
            isLoading={isLoading}
            onPressed={handleSubmit(handleSignUp)}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: sizes[14],
          }}
        >
          <Button
            title='Voltar para o login'
            variant='secondary'
            onPressed={handleGoBack}
          />
        </View>
      </View>
    </ScrollView>
  );
}
