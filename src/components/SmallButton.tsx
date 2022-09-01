import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles';
import {DEVICE_WIDTH} from '../styles/util';

type Props = {
  child: JSX.Element;
  onPress(): void;
  accessibilityLabel: string;
  buttonColor?: string;
  isDisabled?: boolean;
  marginTop?: number;
  borderColor?: string;
  borderWidth?: number;
  isTransparent?: boolean;
};

export const SmallButton = (props: Props) => {
  const {
    child,
    onPress,
    accessibilityLabel,
    buttonColor,
    isDisabled,
    marginTop = 0,
    borderColor = Colors.White,
    borderWidth = 0,
    isTransparent = false,
  } = props;

  const customStyles = {
    backgroundColor: isTransparent
      ? 'rgba(0,0,0,0)'
      : buttonColor || Colors.LightBlue,
    marginTop,
    borderColor: borderColor ? borderColor : Colors.White,
    borderWidth: isTransparent ? 1 : borderWidth ? borderWidth : 0,
  };

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.button, customStyles]}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}>
      {child}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: DEVICE_WIDTH * 0.449,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
