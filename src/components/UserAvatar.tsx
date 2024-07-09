import { Avatar } from 'react-native-paper';
import { useAppTheme } from 'src/theme';
import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

type UserAvatarProps = {
  size?: number;
  borderWidth?: number;
  uri: string;
};

export function UserAvatar({ size, borderWidth, uri }: UserAvatarProps) {
  const { colors } = useAppTheme();

  return (
    <Avatar.Image
      source={uri ? { uri } : defaultUserPhotoImg}
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
