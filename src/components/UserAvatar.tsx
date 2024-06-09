import { Avatar } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type UserAvatarProps = {
  size?: number;
  borderWidth?: number;
  url: string;
};

export function UserAvatar({ size, borderWidth, url }: UserAvatarProps) {
  const { colors } = useAppTheme();

  return (
    <Avatar.Image
      source={{ uri: url }}
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
