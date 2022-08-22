import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const enum ONBOARDING_ROUTES {
  LANDING = 'LANDING',
  SPLASH = 'SPLASH',
  MAIN = 'MAIN',
}

export type OnboardingStackParamList = {
  [ONBOARDING_ROUTES.LANDING]: undefined;
  [ONBOARDING_ROUTES.SPLASH]: undefined;
  [ONBOARDING_ROUTES.MAIN]: undefined;
};

export type OnboardingNavigationProp = NativeStackNavigationProp<
  OnboardingStackParamList,
  ONBOARDING_ROUTES.LANDING
>;
