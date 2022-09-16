import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Screens */
import Orders from '../screens/orders/orders';
import OrderDetail from '../screens/orders/orderDetail';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
