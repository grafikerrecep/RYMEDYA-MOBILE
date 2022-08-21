import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

export const WebSitePageButton = ({}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        Linking.openURL('https://www.rymedya.com/');
      }}>
      <Text style={styles.text}>Ana Sayfa</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 175,
    height: 35,
    backgroundColor: '#23C6FC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
