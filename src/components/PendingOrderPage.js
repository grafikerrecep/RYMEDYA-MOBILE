import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';

export const PendingOrderPage = ({order, setOrder, setOrders}) => {
  return (
    <View style={styles.container}>
      <Icon
        type="material"
        name="design-services"
        color="#353532"
        size={50}
      />
      <Text style={styles.title}>Tasarımınız Hazırlanıyor...</Text>
      <Text style={styles.infoText}>
        Tasarımınız hazır olduğunda burada görünecek ve mail ve bildirim ile
        size duyurulacaktır.
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
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  infoText: {
    color: 'black',
    fontSize: 14,
    margin: 20,
  },
});
