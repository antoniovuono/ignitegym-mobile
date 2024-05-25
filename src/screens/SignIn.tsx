import { Center, Image, VStack, Text } from '@gluestack-ui/themed';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

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

      <Center my='$24'>
        <LogoSvg />

        <Text color='$gray100' fontSize='$sm'>
          Treine sua mente e o seu corpo.
        </Text>
      </Center>
    </VStack>
  );
}
