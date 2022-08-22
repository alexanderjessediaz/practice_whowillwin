import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum ROOT_ROUTES {
  LOADING = 'LOADING',
  ONBOARDING = 'ONBOARDING',
  MAIN = 'MAIN',
}

export type RootStackParamList = {
  [ROOT_ROUTES.MAIN]: undefined;
  [ROOT_ROUTES.LOADING]: undefined;
  [ROOT_ROUTES.ONBOARDING]: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ROOT_ROUTES.MAIN
>;
