import { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

type CenterProps = ViewProps & {
  children: ReactNode;
  flex?: number;
  bg?: string;
  mx?: number;
  my?: number;
  py?: number;
  px?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
};

export function Center({
  children,
  flex,
  bg,
  mx,
  my,
  px,
  py,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
}: CenterProps) {
  return (
    <View
      style={{
        flex: flex ? flex : 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bg,
        marginVertical: my,
        marginHorizontal: mx,
        paddingHorizontal: px,
        paddingVertical: py,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
      }}
    >
      {children}
    </View>
  );
}
