import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon, Button} from '@rneui/themed';
import {checkPermission} from '../utils/DownloadImage';

export const WaitingAcceptDesignPage = props => {
  const [path, setPath] = useState('');
  const {image} = props;

  useEffect(() => {
    if (image) {
      image.forEach(element => {
        setPath(element.path);
      });
    }
  }, [props.image]);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Icon type="material" name="picture-as-pdf" size={60} color="red" />
      </View>
      {path && (
        <Button
          title="İncele"
          buttonStyle={styles.detailButton}
          titleStyle={{color: 'black'}}
          onPress={() => {
            var check = checkPermission(path);
            console.log(check);
            if (check)
              alert('Dosya indirildi. İncelemek için galerinize bakın.');
          }}
        />
      )}
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
  card: {
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.25,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  detailButton: {
    marginTop: 10,
    backgroundColor: '#FFDE00',
    height: Dimensions.get('screen').height * 0.05,
    width: Dimensions.get('screen').width * 0.3,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
