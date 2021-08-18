import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNativator';

const App = () => {
  
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
export default App;
