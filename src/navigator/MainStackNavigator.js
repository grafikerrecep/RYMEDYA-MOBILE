import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Screens */
import Orders from '../screens/orders/orders';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
