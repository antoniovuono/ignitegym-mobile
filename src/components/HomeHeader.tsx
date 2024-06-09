import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';
import { UserAvatar } from './UserAvatar';

import { MaterialIcons } from '@expo/vector-icons';

export function HomeHeader() {
  const { colors, fontSizes, fonts } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: colors.gray600,
        width: '100%',
        paddingTop: 64,
        paddingBottom: 26,
        paddingHorizontal: 35,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <UserAvatar
          size={64}
          borderWidth={33}
          url='https://github.com/antoniovuono.png'
        />

        <View>
          <Text
            style={{
              color: colors.gray100,
              fontSize: fontSizes.md,
              fontFamily: fonts.body.fontFamily,
            }}
          >
            Olá,
          </Text>
          <Text
            style={{
              color: colors.gray100,

              fontSize: fontSizes.md,
              fontFamily: fonts.heading.fontFamily,
            }}
          >
            Antonio!
          </Text>
        </View>
      </View>

      <TouchableOpacity>
        <MaterialIcons name='logout' color={colors.gray200} size={28} />
      </TouchableOpacity>
    </View>
  );
}
