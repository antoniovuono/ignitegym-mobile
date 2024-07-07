import { Image, ScrollView, View } from 'react-native';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { useAppTheme } from 'src/theme';
import { Text } from 'react-native-paper';
import { Center } from '@components/Center';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { Controller, useForm } from 'react-hook-form';
import { signInSchema, signInSchemaTypes } from '@utils/schemas/sign-in-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@hooks/useAuth';
import { SignUpSchemaTypes } from '@utils/schemas/sign-up-schema';

type FormDataProps = {
  email: string;
  password: string;
};

export function SignIn() {
  const { colors, sizes, fontSizes, fonts } = useAppTheme();
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signInSchemaTypes>({
    resolver: zodResolver(signInSchema),
  });

  async function handleSignIn({ email, password }: FormDataProps) {
    await signIn(email, password);
  }

  function handleNewAccount() {
    navigate('signUp');
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

        <Center mb={10}>
          <Text
            style={{
              fontSize: fontSizes.xl,
              fontFamily: fonts.heading.fontFamily,
              color: colors.gray100,
            }}
          >
            Acesse a conta
          </Text>
        </Center>

        <Controller
          control={control}
          name='email'
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

        <View style={{ marginTop: 5 }}>
          <Button
            title='Acessar'
            isLoading={false}
            onPressed={handleSubmit(handleSignIn)}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: sizes[14],
          }}
        >
          <Text
            style={{
              color: colors.gray100,
              fontSize: fontSizes.sm,
              fontFamily: fonts.body.fontFamily,
              marginBottom: 20,
            }}
          >
            Ainda não tem acesso
          </Text>

          <Button
            title='Criar conta'
            isLoading={false}
            variant='secondary'
            onPressed={handleNewAccount}
          />
        </View>
      </View>
    </ScrollView>
  );
}
