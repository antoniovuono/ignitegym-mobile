import { Image, ScrollView, View } from 'react-native';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { useAppTheme } from 'src/theme';
import { Text } from 'react-native-paper';
import { Center } from '@components/Center';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export function SignUp() {
  const { colors, sizes, fontSizes, fonts } = useAppTheme();
  const { goBack } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({});

  function handleGoBack() {
    goBack();
  }

  function handleSignUp(data: FormDataProps) {
    console.log(data);
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
          rules={{
            required: 'Nome é obrigatório',
          }}
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
            />
          )}
        />

        <Controller
          control={control}
          name='confirm_password'
          render={({ field: { onChange, value } }) => (
            <Input
              type='primary'
              placeholder='Confirmar Senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
            />
          )}
        />

        <View style={{ marginTop: 5 }}>
          <Button
            title='Criar e Acessar'
            isLoading={false}
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
            isLoading={false}
            variant='secondary'
            onPressed={handleGoBack}
          />
        </View>
      </View>
    </ScrollView>
  );
}
