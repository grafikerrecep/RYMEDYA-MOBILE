import React from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

function Orders() {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View>
      <Text>Orders</Text>
      <Button
        title="Sign out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}

export default Orders;
