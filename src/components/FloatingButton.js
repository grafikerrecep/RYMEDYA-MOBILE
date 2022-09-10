import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Icon} from '@rneui/themed';
import { AuthContext } from '../context/AuthContext';

export function FloatingButton() {
  const {signOut} = React.useContext(AuthContext);
  return (
    <>
      <TouchableOpacity onPress={() => signOut()}>
        <View style={styles.container}>
          <Icon type="material" name="logout" color={'white'} size={25} />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 60,
    zIndex: 100,
    backgroundColor: '#733eb2',
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
