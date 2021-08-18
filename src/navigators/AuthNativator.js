import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Cadastro from '../screens/Cadastro/Cadastro';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AuthNavigator