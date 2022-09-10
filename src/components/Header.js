import React from 'react';

import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {Header as HeaderRNE, Icon} from '@rneui/themed';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
    const {signOut} = React.useContext(AuthContext);
  return (
    <>
      <StatusBar hidden={true} />
      <HeaderRNE
        backgroundColor="#fff"
        style={styles.header}
        centerComponent={() => (
          <View style={styles.headerImageView}>
            <Image
              style={styles.headerImage}
              source={require('../assets/images/rymedya.png')}
            />
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  headerImageView: {
    marginTop: 0,
  },
  headerImage: {
    width: 150,
    height: 50,
  },
});
