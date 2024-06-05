import { Avatar } from 'react-native-paper';
import { useAppTheme } from 'src/theme';

type UserAvatarProps = {
  size?: number;
};

export function UserAvatar({ size }: UserAvatarProps) {
  const { colors } = useAppTheme();

  return (
    <Avatar.Image
      source={{ uri: 'https://github.com/antoniovuono.png' }}
      size={size}
      style={{
        borderWidth: 33,
        borderColor: colors.gray400,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}
