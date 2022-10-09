import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from '@rneui/themed';
import {CheckBox, Icon} from '@rneui/themed';
import {rejectOrder, acceptOrder} from '../services/orders/order';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function BottomOrderControle(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  const {order, setOrder, setOrders} = props;

  useEffect(() => {
    AsyncStorage.getItem('isAdmin').then(value => {
      console.log(value);
      setIsAdmin(value);
    });
  }, []);

  const rejectedAccepted = () => {
    order.status = 'rejected';
    rejectOrder(order, setOrder, setOrders);
  };

  const acceptedOrder = () => {
    order.status = 'accepted';
    acceptOrder(order, setOrder, setOrders);
  };

  return (
    <>
      <View style={styles.container}>
        {isAdmin ? (
          <>
            <View style={styles.upComponent}>
              <TextInput style={styles.input} placeholder="Müşterinin cep numarası" />
            </View>
            <View style={[styles.upComponent, {marginBottom: 25}]}>
              <Button
                title="Tasarımı Yükle"
                loading={false}
                loadingProps={{size: 'small', color: 'white'}}
                buttonStyle={{
                  backgroundColor: '#23C6FC',
                  borderRadius: 5,
                }}
                titleStyle={{fontWeight: 'bold', fontSize: 18}}
                containerStyle={[styles.upButton, {backgroundColor: '#23C6FC'}]}
                onPress={() => console.log('aye')}>
                <Icon
                  type="material"
                  name="file-upload"
                  color="white"
                  size={30}
                />
                {''}
                Tasarımı Yükle
              </Button>
              <Button
                title="Tasarımı Onayla"
                loading={false}
                loadingProps={{size: 'small', color: 'red'}}
                buttonStyle={{
                  backgroundColor: 'red',
                  borderRadius: 5,
                }}
                titleStyle={{fontWeight: 'bold', fontSize: 18}}
                containerStyle={[styles.upButton, {backgroundColor: 'red'}]}
                onPress={() => console.log('aye')}>
                <Icon
                  type="material"
                  name="delete"
                  color="white"
                  size={30}
                />
                {''}
                Tasarımı Kaldır
              </Button>
            </View>
            <View style={styles.bottomComponent}>
              <Button
                title="Tasarımı Onayla"
                loading={false}
                loadingProps={{size: 'small', color: 'white'}}
                buttonStyle={{
                  backgroundColor: '#00D8C1',
                  borderRadius: 5,
                }}
                titleStyle={{fontWeight: 'bold', fontSize: 18}}
                containerStyle={[styles.upButton, {backgroundColor: '#00D8C1'}]}
                onPress={() => console.log('aye')}>
                <Icon
                  type="material"
                  name="send"
                  color="white"
                  size={30}
                  style={{transform: [{ rotate: '312deg'}]}}
                />
                {' '}
                Müşteriye Yaz
              </Button>
              <Button
                title="Tasarımı Onayla"
                loading={false}
                loadingProps={{size: 'small', color: 'white'}}
                buttonStyle={{
                  backgroundColor: '#FF731D',
                  borderRadius: 5,
                }}
                titleStyle={{fontWeight: 'bold', fontSize: 18}}
                containerStyle={[styles.upButton, {backgroundColor: '#FF731D'}]}
                onPress={() => console.log('aye')}>
                <Icon
                  type="material"
                  name="campaign"
                  color="white"
                  size={30}
                />
                {''}
                Duyuru Yap
              </Button>
            </View>
          </>
        ) : (
          <>
            <View style={styles.upComponent}>
              {order.status === 'pending' ? (
                <Button
                  title="Tasarımı Onayla"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    backgroundColor: '#23C6FC',
                    borderRadius: 5,
                  }}
                  titleStyle={{fontWeight: 'bold', fontSize: 18}}
                  containerStyle={[
                    styles.upButton,
                    {backgroundColor: '#23C6FC'},
                  ]}
                  onPress={() => console.log('aye')}>
                  <Icon
                    type="material"
                    name="check-circle-outline"
                    color="white"
                    size={30}
                  />
                  {''}
                  Tasarımı Onayla
                </Button>
              ) : order.status === 'accepted' ? (
                <Button
                  title="Onayladınız"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    backgroundColor: '#00D8C1',
                    borderRadius: 5,
                  }}
                  titleStyle={{fontWeight: 'bold', fontSize: 18}}
                  containerStyle={[
                    styles.upButton,
                    {backgroundColor: '#00D8C1'},
                  ]}>
                  <Icon
                    type="material"
                    name="check-circle-outline"
                    color="white"
                    size={30}
                  />
                  {''}
                  Onayladınız
                </Button>
              ) : order.status === 'accepted_design' ? (
                <Button
                  title="Tasarımı Onayla"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    backgroundColor: '#23C6FC',
                    borderRadius: 5,
                  }}
                  titleStyle={{fontWeight: 'bold', fontSize: 18}}
                  containerStyle={[
                    styles.upButton,
                    {backgroundColor: '#23C6FC'},
                  ]}
                  onPress={acceptedOrder}>
                  <Icon
                    type="material"
                    name="radio-button-unchecked"
                    color="white"
                    size={30}
                  />
                  {''}
                  Tasarımı Onayla
                </Button>
              ) : null}
              {order.status === 'pending' ? (
                <Button
                  title="Tasarımı Onayla"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    backgroundColor: '#00D8C1',
                    borderRadius: 5,
                  }}
                  titleStyle={{fontWeight: 'bold', fontSize: 18}}
                  containerStyle={[
                    styles.upButton,
                    {backgroundColor: '#00D8C1'},
                  ]}
                  onPress={() => console.log('aye')}>
                  <Icon type="material" name="replay" color="white" size={30} />
                  {''}
                  Revize İste
                </Button>
              ) : order.status === 'accepted' ? (
                <Button
                  title="Tasarımı Onayla"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    backgroundColor: '#FF1E1E',
                    borderRadius: 5,
                  }}
                  titleStyle={{fontWeight: 'bold', fontSize: 18}}
                  containerStyle={[
                    styles.upButton,
                    {backgroundColor: '#FF1E1E'},
                  ]}
                  onPress={rejectedAccepted}>
                  <Icon type="material" name="replay" color="white" size={30} />
                  {''}
                  Onay İptali İste
                </Button>
              ) : order.status === 'accepted_design' ? (
                <Button
                  title="Tasarımı Onayla"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    backgroundColor: '#00D8C1',
                    borderRadius: 5,
                  }}
                  titleStyle={{fontWeight: 'bold', fontSize: 18}}
                  containerStyle={[
                    styles.upButton,
                    {backgroundColor: '#00D8C1'},
                  ]}
                  onPress={() => console.log('aye')}>
                  <Icon type="material" name="replay" color="white" size={30} />
                  {''}
                  Revize İste
                </Button>
              ) : null}
            </View>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomText}>
                Onaylanan tasarımlarda tekrar düzenleme yapılamaz. Değişiklik
                olacak ise onaylamadan önce Revize İsteyin ve değişiklik olacak
                yerleri belirtin.
              </Text>
            </View>
            <View style={styles.miniLinkContainer}>
              <View>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://www.rymedya.com/')}>
                  <Text style={styles.miniLink}>RYMedya Ana Sayfa</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, flexWrap: 'wrap-reverse'}}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      'https://www.rymedya.com/mesafeli-satis-sozlesmesi/',
                    )
                  }>
                  <Text style={[styles.miniLink]}>
                    Mesafeli Satış Sözleşmesi
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.3,
    flexDirection: 'column',
    width: width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  upComponent: {
    flex: 3,
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  bottomComponent: {
    flex: 3,
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25
  },
  upButton: {
    width: width * 0.47,
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
    justifyContent: 'center',
    height: 65,
    borderRadius: 10,
  },
  bottomTextContainer: {
    flex: 2,
    margin: 25,
    marginVertical: 1,
  },
  bottomText: {
    color: 'black',
    fontWeight: '400',
  },
  input: {
    width: width * 0.95,
    height: 55,
    margin: 5,
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
  miniLinkContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
    margin: 25,
    alignItems: 'center',
  },
  miniLink: {
    color: 'black',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});

export default BottomOrderControle;
