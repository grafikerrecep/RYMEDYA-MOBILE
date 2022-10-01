import React from 'react';
import {Image, View} from 'react-native';
import {
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '@rneui/themed';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function DataList(props) {
  const Item = ({item, navigation}) => {
    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            width: '50%',
            justifyContent: 'center',
            marginLeft: 35,
          }}>
          <Text
            style={{
              marginLeft: 0,
              color: '#353532',
              fontSize: 15,
              fontWeight: '400',
            }}>
            {item.customer[0].name}
          </Text>
          <Text
            style={{
              marginLeft: 0,
              color: '#353532',
              fontSize: 15,
              fontWeight: '400',
            }}>
            {item.order_info} -{' '}
            {item.status === 'accepted'
              ? 'Onaylandı'
              : item.status === 'pending'
              ? 'Beklemede'
              : 'Reddedildi'}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width * 0.4,
              height: 40,
              backgroundColor: '#00D8C1',
              zIndex: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25
            }}>
            <Text
              style={{
                marginLeft: 0,
                color: 'white',
                fontSize: 15,
                fontWeight: '800',
              }}>
              {item.created_at}
            </Text>
          </View>
        </View>
      </>
    );
  };

  const RenderItem = ({item, navigation}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('OrderDetail', {
            itemId: item.id,
          })
        }
        style={[
          styles.list,
          {backgroundColor: parseInt(item.id) % 2 === 0 ? 'white' : '#E8E8E8'},
        ]}>
        <Item item={item} navigation={navigation} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      {props.datas.length > 0 ? (
        <FlatList
          style={{flex: 1, width: '100%', flexDirection: 'row'}}
          numColumns={1}
          data={props.datas}
          renderItem={({item}) => (
            <RenderItem item={item} navigation={props.navigation} />
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>Sipariş Bulunamadı :(</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    width: width,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#23C6FC',
  },
  card: {
    width: width,
    height: 50,
    marginVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 2,
    color: '#E0D98C',
  },
  statusIcon: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  subTextContainer: {
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
  subText: {
    fontSize: 12,
    color: 'black',
  },
});
