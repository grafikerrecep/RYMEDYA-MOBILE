import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getOrders} from '../../redux/actions/orderAction';
import Header from '../../components/Header';
import { FloatingButton } from '../../components/FloatingButton';

function Orders(props) {
  useEffect(() => {
    props.dispatch(getOrders());
  }, []);

  console.log(props.orders);
  return (
    <>
      <View style={styles.container}>
        <Header />
      </View>
      <FloatingButton />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

function mapStateToProps(state) {
  return {orders: state.orderReducer.orders};
}

export default connect(mapStateToProps)(Orders);
