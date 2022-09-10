import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {connect} from 'react-redux';
import {getOrders} from '../../redux/actions/orderAction';

function Orders(props) {
  const {signOut} = React.useContext(AuthContext);

  useEffect(() => {
    props.dispatch(getOrders());
  }, []);

  console.log(props.orders);
  return (
    <View>
      <Text>Orders</Text>
      <Button
        title="Sign out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}

function mapStateToProps(state, props) {
  return {orders: state.orderReducer.orders};
}

export default connect(mapStateToProps)(Orders);
