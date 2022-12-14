/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {
//   SafeAreaProvider,
//   initialWindowMetrics,
// } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import RootNavigator from './src/navigation/RootNavigator';
import {store} from './src/store';
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
