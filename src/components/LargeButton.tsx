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
  width?: number | string;
};

export const LargeButton = (props: Props) => {
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
    width = DEVICE_WIDTH * 0.918,
  } = props;

  const customStyles = {
    backgroundColor: isTransparent
      ? 'rgba(0,0,0,0)'
      : buttonColor || Colors.LightBlue,
    marginTop,
    borderColor: borderColor ? borderColor : Colors.White,
    borderWidth: isTransparent ? 1 : borderWidth ? borderWidth : 0,
    width,
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
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
