import React from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

function Home() {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Sign out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}

export default Home;
