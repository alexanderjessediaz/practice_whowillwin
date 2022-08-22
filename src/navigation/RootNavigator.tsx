import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ROOT_ROUTES} from './RootTypes';
import MainStack from './main';
import OnboardingStack from './onboarding';
import Loading from '../screens/onboarding/Loading';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ROOT_ROUTES.LOADING}>
          <Stack.Screen
            name={ROOT_ROUTES.LOADING}
            component={Loading}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen
            name={ROOT_ROUTES.MAIN}
            component={MainStack}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen
            name={ROOT_ROUTES.ONBOARDING}
            component={OnboardingStack}
            options={{gestureEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
