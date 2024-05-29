import { Image, ScrollView, View } from 'react-native';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { useAppTheme } from 'src/theme';
import { Text } from 'react-native-paper';
import { Center } from '@components/Center';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp() {
  const { colors, sizes, fontSizes, fonts } = useAppTheme();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: colors.gray700,
          paddingHorizontal: 30,
        }}
      >
        <Image
          source={BackgroundImg}
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

        <Input placeholder='Name' />
        <Input placeholder='Email' keyboardType='email-address' />
        <Input placeholder='Senha' secureTextEntry />

        <View style={{ marginTop: 5 }}>
          <Button title='Acessar' isLoading={false} />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: sizes[14],
          }}
        >
          <Button title='Cadastre-se' isLoading={false} variant='secondary' />
        </View>
      </View>
    </ScrollView>
  );
}
