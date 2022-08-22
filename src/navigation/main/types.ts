import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const enum MAIN_ROUTES {
  MENU = 'MENU',
}

export type MainStackParamList = {
  [MAIN_ROUTES.MENU]: undefined;
};

export type MainNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  MAIN_ROUTES.MENU
>;
