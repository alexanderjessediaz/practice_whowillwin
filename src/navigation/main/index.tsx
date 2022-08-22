import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList, MAIN_ROUTES} from './types';
import MainMenu from '../../screens/main/Menu';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={MAIN_ROUTES.MENU} component={MainMenu} />
    </Stack.Navigator>
  );
};

export default MainStack;
