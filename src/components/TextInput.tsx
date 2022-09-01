import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';
import MaskInput from 'react-native-mask-input';

import {DEVICE_WIDTH} from '../styles/util';
import {Colors} from '../styles';

type Props = {
  value: string;
  onChange(text: string): void;
  onFocus?: () => void;
  onPressIn?: () => void;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  secureTextEntry?: boolean;
  customContainerStyles?: ViewStyle;
  customInputStyles?: TextStyle;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onSubmit?: () => void;
  multiline?: boolean;
  numberOfLines?: number;
  containerWidth?: number | string;
  onBlur?(): void;
  inputHeight?: number;
  maxLength?: number;
};

export const WingmanTextInput = (props: Props) => {
  const {
    value,
    onChange,
    onFocus = () => {},
    onPressIn = () => {},
    autoCorrect = true,
    autoFocus,
    autoCapitalize = 'sentences',
    keyboardType,
    placeholder,
    secureTextEntry = false,
    customInputStyles,
    customContainerStyles,
    leftIcon = null,
    rightIcon = null,
    onSubmit,
    multiline,
    numberOfLines = 1,
    containerWidth = DEVICE_WIDTH * 0.918,
    onBlur,
    inputHeight = 128,
    maxLength = undefined,
  } = props;

  const [text, setText] = useState(value);

  //Update the Inner Text state when the Value prop changes
  useEffect(() => {
    setText(value);
  }, [value]);

  const handleOnChange = (newVal: string) => {
    setText(newVal);
    onChange(newVal);
  };

  const inputPaddingStyles = {padding: 15, paddingLeft: leftIcon ? 0 : 15};

  const containerStyles = {
    width: containerWidth,
    height: multiline ? inputHeight : 47,
    paddingTop: multiline ? 30 : undefined,
  };

  const inputStyles = {
    ...customInputStyles,
    height: multiline ? inputHeight : 47,
  };

  if (keyboardType === 'phone-pad') {
    return (
      <View
        style={[
          styles.PPTextWrapper,
          customContainerStyles,
          inputPaddingStyles,
          containerStyles,
        ]}>
        {leftIcon && <View style={styles.leftButton}>{leftIcon}</View>}
        <MaskInput
          placeholder={placeholder || 'Input text here…'}
          placeholderTextColor={Colors.Black}
          keyboardType={keyboardType}
          style={[styles.textInput, inputStyles]}
          value={text}
          returnKeyType="done"
          returnKeyLabel="done"
          onFocus={onFocus}
          onPressIn={onPressIn}
          onChangeText={masked => {
            handleOnChange(masked); // you can use the unmasked value as well
          }}
          onSubmitEditing={onSubmit}
          mask={[
            '+',
            '1',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
        />
        {rightIcon && <View style={styles.leftButton}>{rightIcon}</View>}
      </View>
    );
  }

  return (
    <View
      style={[
        styles.PPTextWrapper,
        customContainerStyles,
        inputPaddingStyles,
        containerStyles,
      ]}>
      {leftIcon && <View style={styles.leftButton}>{leftIcon}</View>}
      <TextInput
        style={[styles.textInput, inputStyles]}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        autoCapitalize={
          keyboardType === 'email-address' ? 'none' : autoCapitalize
        }
        keyboardType={keyboardType || 'default'}
        onChangeText={newText => handleOnChange(newText)}
        onFocus={onFocus}
        onPressIn={onPressIn}
        placeholder={placeholder || 'Input text here…'}
        placeholderTextColor={Colors.Black}
        secureTextEntry={secureTextEntry}
        value={text}
        onSubmitEditing={onSubmit}
        multiline={multiline || false}
        numberOfLines={numberOfLines}
        onBlur={onBlur}
        returnKeyType="done"
        returnKeyLabel="done"
        maxLength={maxLength}
      />
      {rightIcon && <View style={styles.leftButton}>{rightIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 17,
    flexGrow: 1,
    // fontFamily: Fonts.mainFontRegular,
  },
  PPTextWrapper: {
    borderRadius: 10,
    backgroundColor: Colors.White,
    borderWidth: 1,
    // borderColor: Colors.BorderAndTextGrey,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  leftButton: {
    marginRight: 0,
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
