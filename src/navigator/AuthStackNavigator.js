import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Screens */
import Login from '../screens/auth/login';

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
