import {Alert} from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  cancelText?: string;
  successButton?: {
    text: string;
    onPress(): void;
  };
};

export const alert = (props: Props) => {
  const {title, subtitle, cancelText, successButton} = props;

  const cancelButton = {
    style: 'cancel',
    text: cancelText || 'Cancel',
    onPress: () => {},
  };

  if (subtitle && cancelText && successButton) {
    return Alert.alert(title, subtitle, [cancelButton, successButton]);
  }
  if (subtitle && !cancelText && successButton) {
    return Alert.alert(title, subtitle, [successButton]);
  }
  if (subtitle && successButton) {
    return Alert.alert(title, subtitle, [successButton]);
  }
  if (subtitle) {
    return Alert.alert(title, subtitle);
  }
  return Alert.alert(title);
};
