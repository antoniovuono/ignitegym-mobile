import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAppTheme } from 'src/theme';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import BodySvg from '@assets/body.svg';
import { Text } from 'react-native-paper';

export function Exercise() {
  const { colors, fontSizes, fonts } = useAppTheme();

  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: colors.gray600,
          paddingTop: 52,
          paddingHorizontal: 32,
          paddingBottom: 32,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name='arrow-left' size={24} color={colors.green500} />
          </TouchableOpacity>
          <Text
            style={{
              color: colors.gray100,
              fontSize: fontSizes.lg,
              fontFamily: fonts.heading.fontFamily,
              marginTop: 10,
              flexShrink: 1,
            }}
          >
            Puxada frontal
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <BodySvg />
          <Text
            style={{
              color: colors.gray100,
              fontSize: fontSizes.sm,
              fontFamily: fonts.body.fontFamily,
              marginLeft: 4,
            }}
          >
            Costas
          </Text>
        </View>
      </View>
    </View>
  );
}
