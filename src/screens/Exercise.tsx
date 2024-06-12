import { TouchableOpacity, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAppTheme } from 'src/theme';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import BodySvg from '@assets/body.svg';
import { Card, Text } from 'react-native-paper';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';

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

      <View style={{ padding: 14 }}>
        <Image
          source={{
            uri: 'https://uploads.metropoles.com/wp-content/uploads/2023/02/17143449/GettyImages-946365998-1.jpg',
          }}
          height={384}
          borderRadius={6}
          style={{
            marginBottom: 16,
          }}
        />

        <View>
          <Card
            contentStyle={{
              backgroundColor: colors.gray600,
              borderRadius: 8,
              padding: 16,
            }}
          >
            <Card.Content
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 24,
              }}
            >
              <Card.Content
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <SeriesSvg />
                <Text
                  style={{
                    color: colors.gray100,
                    fontFamily: fonts.body.fontFamily,
                    fontSize: fontSizes.md,
                    marginLeft: 8,
                  }}
                >
                  3 séries
                </Text>
              </Card.Content>

              <Card.Content
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <RepetitionsSvg />
                <Text
                  style={{
                    color: colors.gray100,
                    fontFamily: fonts.body.fontFamily,
                    fontSize: fontSizes.md,
                    marginLeft: 8,
                  }}
                >
                  12 repetições
                </Text>
              </Card.Content>
            </Card.Content>

            <Button title='Marcar como realizado' isLoading={false} />
          </Card>
        </View>
      </View>
    </View>
  );
}
