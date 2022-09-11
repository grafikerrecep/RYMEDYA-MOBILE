import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';
import {login} from '../services/auth/login.services';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const {signIn} = React.useContext(AuthContext);


const followDesign = (name, phone, check) => {
  signIn({name, phone, check});
};

export const LoginForm = () => {
  const [check4, setCheck4] = React.useState(false);
  const [name, setName] = useState('Doğukan Karasansar');
  const [phone, setPhone] = useState('+905340741203');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adınızı Soyadınız"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cep Numaranız"
        value={phone}
        onChangeText={value => setPhone(value)}
      />
      <View style={styles.footerformContainer}>
        <CheckBox
          title="Oturumu açık tutun"
          titleStyle={{color: '#353532'}}
          containerStyle={{backgroundColor: 'transparent'}}
          center
          checkedIcon={
            <Icon
              name="check-box"
              type="material"
              color="grey"
              size={25}
            />
          }
          uncheckedIcon={
            <Icon name="check-box-outline-blank" type="material" color="grey" size={25} />
          }
          checked={check4}
          onPress={() => setCheck4(!check4)}
        />
        <Text
          style={{
            lineHeight: 58,
            fontWeight: 'bold',
            fontSize: 12,
            color: '#353532',
          }}>
          Üyelik Sözleşmesi?
        </Text>
      </View>
      <View style={styles.submitButtonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => followDesign(name, phone, check4)}>
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
    width: width * 0.7,
    height: 47,
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
    width: width * 0.7,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitButtonContainer: {
    margin: 12,
    width: width - 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  submitButton: {
    width: 175,
    height: 35,
    backgroundColor: '#00D8C1',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
