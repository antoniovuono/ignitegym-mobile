import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

export function HistoryCard() {
  const { fontSizes, colors } = useAppTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.gray600,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 8,
        marginBottom: 12,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: fontSizes.md,
            color: colors.white,
            textTransform: 'capitalize',
          }}
        >
          Costas
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: fontSizes.lg,
            color: colors.gray100,
            textTransform: 'capitalize',
          }}
        >
          Puxada frontal
        </Text>
      </View>

      <Text
        style={{
          color: colors.gray300,
          fontSize: fontSizes.md,
        }}
      >
        08:56
      </Text>
    </View>
  );
}
