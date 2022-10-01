import {Button, Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function DownloadDesign(props) {
  const [path, setPath] = useState('');
  const {image} = props;

  useEffect(() => {
    if (image) {
      image.forEach(element => {
        setPath(element.path);
      });
    }
  }, [props.image]);

  console.log(path);
  return (
    <>
      <View style={styles.container}>
        <View style={{width: '50%', marginLeft: 30}}>
          <Text style={{fontSize: 13, color: 'black'}}>
            Tasarımınızı onay öncesi indirin onay sonrası otomatik silinir.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '50%',
            flexWrap: 'wrap-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 30,
          }}>
            <TouchableOpacity>
            <Icon type="material" name="file-download" size={30} color="black" />
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fcf8d6',
  },
});

export default DownloadDesign;
