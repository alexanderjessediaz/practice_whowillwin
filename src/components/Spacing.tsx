import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface Props {
  vertical?: number;
  horizontal?: number;
}

export const Spacing = (props: Props) => {
  const {vertical, horizontal} = props;

  const styles: StyleProp<ViewStyle> = {
    marginHorizontal: horizontal,
    marginVertical: vertical,
  };

  return <View style={styles} />;
};
