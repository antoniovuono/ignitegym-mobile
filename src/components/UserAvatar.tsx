import { Avatar } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type UserAvatarProps = {
  size?: number;
  borderWidth?: number;
};

export function UserAvatar({ size, borderWidth }: UserAvatarProps) {
  const { colors } = useAppTheme();

  return (
    <Avatar.Image
      source={{ uri: 'https://github.com/antoniovuono.png' }}
      size={size}
      style={{
        borderWidth: borderWidth,
        borderColor: colors.gray400,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}
