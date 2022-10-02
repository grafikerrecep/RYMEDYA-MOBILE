import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export const AcceptedOrderPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TASARIM DOSYANIZI</Text>
      <Text style={styles.title}>ONAYLADINIZ.</Text>
      <Text style={styles.infoText}>
        Baskılı ürün ise tasarım üretime gönderilecektir.{' '}
        <Text style={{color: 'red'}}>
          Üretime giden dosyaların baskı onayı geri çekilemez
        </Text>
        . Onayladığınız tasarım sizin sorumluluğunuzda doğrudan üretime
        gönderilecektir.{' '}
        <Text style={{color: 'red'}}>
          Tasarımın son haline onay verdiğinizi unutmayınız.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Dimensions.get('screen').height * 0.25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00D8C1',
  },
  infoText: {
    color: 'black',
    fontSize: 14,
    margin: 20,
  },
});
