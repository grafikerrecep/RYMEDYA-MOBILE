import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const LoginForm = () => {
  const [check4, setCheck4] = React.useState(false);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Adınızı Soyadınız" />
      <TextInput style={styles.input} placeholder="Cep Numaranız" />
      <View style={styles.footerformContainer}>
      <CheckBox
      center
      checkedIcon={
        <Icon
          name="check-box-outline-blank"
          type="material"
          color="grey"
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
      uncheckedIcon={
        <Icon
          name="check-box"
          type="material"
          color="grey"
          size={25}
          iconStyle={{ marginRight: 10 }}
        />
      }
      checked={check4}
      onPress={() => setCheck4(!check4)}
    />
      </View>
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
    color: '#BFBFBF',
  },
  footerformContainer: {
    flex: 1,
    width: width - 150,
    height: 30,
    margin: 12,
    flexDirection: 'column',
    justifyContent: 'center',
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
  },
});
