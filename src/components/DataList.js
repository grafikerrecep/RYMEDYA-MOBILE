import {Icon} from '@rneui/base';
import React from 'react';
import {Image, View} from 'react-native';
import {FlatList, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Item = ({item}) => {
  return (
    <>
      <TouchableOpacity onPress={() => console.log('click')}>
        <View style={styles.card}>
          <View style={styles.statusIcon}>
            <Icon
              type="material"
              name={
                item.status === 'accepted'
                  ? 'check-circle-outline'
                  : item.status === 'pending'
                  ? 'hourglass-bottom'
                  : 'priority-high'
              }
              size={30}
              color={
                item.status === 'accepted'
                  ? '#C3FF99'
                  : item.status === 'pending'
                  ? '#FFDE00'
                  : '#FF4A4A'
              }
            />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>{item.order_info}</Text>
          </View>
          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Sipariş Id -
              </Text>{' '}
              {item.uuid}
            </Text>
            <Text style={styles.subText}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Sipariş Tarihi -
              </Text>{' '}
              {item.created_at}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const renderItem = ({item}) => {
  return <Item item={item} />;
};

export function DataList(props) {
  return (
    <>
      <SafeAreaView>
        {props.datas.length > 0 ? (
          <FlatList
            style={styles.list}
            numColumns={2}
            data={props.datas}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>Sipariş Bulunamadı :(</Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 20,
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
    flex: 1,
    flexDirection: 'column',
    width: width * 0.4,
    margin: 10,
    height: 150,
    backgroundColor: '#FFF5E4',
    marginVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
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
