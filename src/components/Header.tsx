import React, {ReactNode} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../styles';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../styles/util';

type HeaderImageProps = {
  uri: string;
};

export const HeaderImage = (props: HeaderImageProps) => {
  const {uri} = props;
  return (
    // Image
  );
};

export type HeaderButton = {
  child: ReactNode;
  disabled?: boolean;
  onclick(): void;
  text?: string;
};

export type HeaderProps = {
  accessibilityHint?: string;
  accessibilityLabel?: string;
  leftButton?: HeaderButton;
  rightButton?: HeaderButton;
  customRightView?: JSX.Element;
  customMiddleIcon?: ReactNode;
  showBottomBorder?: boolean;
  customHeaderStyles?: ViewStyle;
  showLogo?: boolean;
  onLogoPress?: () => void;
};

/**
 * Custom Navigation Header component
 */
export const Header = (props: HeaderProps) => {
  const {
    accessibilityHint,
    accessibilityLabel,
    leftButton,
    rightButton,
    customRightView,
    showBottomBorder,
    customMiddleIcon,
    customHeaderStyles,
    showLogo = false,
    onLogoPress = () => {},
  } = props;

  return (
    <View
      style={[
        styles.header,
        showBottomBorder ? styles.bottomBorder : null,
        customHeaderStyles ? customHeaderStyles : null,
      ]}>
      {leftButton && (
        <View style={styles.leftButton}>
          <TouchableOpacity
            disabled={leftButton.disabled}
            onPress={() => leftButton?.onclick()}
            accessibilityHint="Navigates back"
            accessibilityLabel="tap to navigate"
            accessibilityRole="link">
            {leftButton.child}
          </TouchableOpacity>
        </View>
      )}

      {customMiddleIcon && (
        <View style={styles.customMiddleIcon}>{customMiddleIcon}</View>
      )}

      {showLogo && (
        <View style={styles.customMiddleIcon}>
          <TouchableWithoutFeedback onPress={onLogoPress}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />
          </TouchableWithoutFeedback>
        </View>
      )}

      {customRightView && (
        <View style={styles.rightButton}>{customRightView}</View>
      )}

      {rightButton && (
        <View style={styles.rightButton}>
          <TouchableOpacity
            disabled={rightButton.disabled}
            onPress={() => rightButton?.onclick()}
            accessibilityHint={accessibilityHint}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="link">
            {rightButton.child}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const headerImageSize = DEVICE_HEIGHT / 8;
const height = DEVICE_HEIGHT / 16;

const styles = StyleSheet.create({
  header: {
    height: height,
    flexDirection: 'row',
    alignItems: 'center',
    width: DEVICE_WIDTH,
    //background color
  },
  leftButton: {
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
  headerIcon: {
    height: headerImageSize,
    width: headerImageSize,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  customMiddleIcon: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    borderRadius: 5,
    width: 150,
  },
  bottomBorder: {
    borderBottomWidth: 0.5,
    // borderBottomColor: Colors.LightGray,
  },
  rightButton: {
    position: 'absolute',
    right: 15,
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
