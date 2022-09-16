import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import { getOrder } from '../../services/orders/order';

function OrderDetail({navigation, route}) {
    const id = route.params.itemId;
    const [order, setOrder] = useState({});
    useEffect(() => {
        getOrder(id, setOrder);
    }, []);

    console.log(order);
  return (
    <View>
      <Text>{order.order_info}</Text>
    </View>
  );
}

export default OrderDetail;
