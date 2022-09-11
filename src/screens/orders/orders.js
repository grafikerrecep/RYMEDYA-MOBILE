import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getOrders} from '../../redux/actions/orderAction';
import Header from '../../components/Header';
import {FloatingButton} from '../../components/FloatingButton';
import {DataList} from '../../components/DataList';

function Orders(props) {
  useEffect(() => {
    props.dispatch(getOrders());
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header />
        <DataList datas={props.orders} />
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

function mapStateToProps(state) {
  return {orders: state.orderReducer.orders};
}

export default connect(mapStateToProps)(Orders);
