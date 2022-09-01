import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Colors} from '../styles';
import {MarginProps} from './util';

type FontWeight = 'regular' | 'bold' | 'light' | 'medium' | 'boldItalic';

type Props = MarginProps & {
  text: String;
  color?: string;
  onPress: () => void;
  fontSize?: number;
  fontWeight?: FontWeight;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  fontClass?: 'primary' | 'secondary';
  disabled?: boolean;
};

// const handleFontWeight = (fontWeight: FontWeight) => {
//   switch (fontWeight) {
//     case 'light':
//       return Fonts.mainFontRegular;
//     case 'bold':
//       return Fonts.mainFontBold;
//     case 'boldItalic':
//       return Fonts.mainFontItalic;
//     case 'medium':
//       return Fonts.mainFontMedium;
//     default:
//       return Fonts.mainFontRegular;
//   }
// };

// const handleSecondaryFontWeight = (fontWeight: FontWeight) => {
//   switch (fontWeight) {
//     case 'light':
//       return Fonts.secondaryFontRegular;
//     case 'bold':
//       return Fonts.secondaryFontBold;
//     case 'medium':
//       return Fonts.secondaryFontMedium;
//     default:
//       return Fonts.secondaryFontRegular;
//   }
// };

export const TextButton = (props: Props) => {
  const {
    text,
    color = Colors.LightBlue,
    onPress,
    // fontSize = Fonts.small,
    textAlign = undefined,
    // fontWeight = 'regular',
    marginTop = 0,
    // fontClass = 'primary',
    disabled = false,
  } = props;

  const buttonStyles: StyleProp<ViewStyle> = {
    marginTop,
  };

  const textStyles: StyleProp<TextStyle> = {
    color,
    // fontSize,
    textAlign,
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={buttonStyles}>
      <Text style={[textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};
