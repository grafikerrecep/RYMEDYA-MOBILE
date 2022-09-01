import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const LoginForm = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Adınızı Soyadınız" />
      <TextInput style={styles.input} placeholder="Cep Numaranız" />
      <View style={styles.footerformContainer}></View>
      <View style={styles.submitButtonContainer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Tasarımı Takip Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: width - 150,
    height: 40,
    margin: 12,
    paddingLeft: 12,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 4,
    backgroundColor: '#E8E8E8',
    borderLeftColor: '#00D8C1',
    color: '#BFBFBF'
  },
  footerformContainer: {
    width: width - 150,
    height: 30,
    margin: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  submitButtonContainer: {
    margin: 12,
    width: width - 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitButton: {
    width: 175,
    height: 35,
    backgroundColor: '#00D8C1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  }
});
