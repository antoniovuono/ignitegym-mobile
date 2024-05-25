import {
  Center,
  Image,
  VStack,
  Text,
  Heading,
  Box,
} from '@gluestack-ui/themed';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';

export function SignIn() {
  return (
    <VStack flex={1} bg='$gray700'>
      <Image
        size='full'
        source={BackgroundImg}
        alt='Background Image'
        resizeMode='stretch'
        position='absolute'
      />

      <Center my='$24' gap='$1.5'>
        <LogoSvg />

        <Text color='$gray100' fontSize='$sm'>
          Treine sua mente e o seu corpo.
        </Text>
      </Center>

      <Center>
        <Heading color='$gray100' fontSize='$xl' fontFamily='$heading'>
          Acesse sua conta
        </Heading>

        <Center gap='$2' px='$5' my='$6'>
          <Input placeholder='E-mail' />
          <Input placeholder='Senha' />
        </Center>
      </Center>
    </VStack>
  );
}
