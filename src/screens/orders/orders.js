import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {FloatingButton} from '../../components/FloatingButton';
import {DataList} from '../../components/DataList';
import { getOrders } from '../../services/orders/order';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header />
        <DataList datas={orders} />
      </View>
      <FloatingButton />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Orders;
