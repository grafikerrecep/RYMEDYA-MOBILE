import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {checkPermission} from '../utils/DownloadImage';

function DownloadDesign(props) {
  const [path, setPath] = useState('');
  const {image} = props;

  /* const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Kamera izni gerekli',
            message:
              'Uygulama dosyalarını indirmek için cihazınıza erişim izni vermeniz gerekiyor.',
            buttonNeutral: 'Daha sonra sor',
            buttonNegative: 'İptal',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          downloadImage();
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }; */

  /*  const downloadImage = () => {
    if (path) {
      const date = new Date();
      const image_URL = API_URL + `/${path}`;
      console.log(image_URL);
      let ext = getExtention(image_URL);
      ext = '.' + ext[0];
      const {config, fs} = RNFetchBlob;
      let PictureDir = fs.dirs.PictureDir;
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path:
            PictureDir +
            '/image_' +
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            ext,
          description: 'Image',
        },
      };
      config(options)
        .fetch('GET', image_URL)
        .then(res => {
          console.log('res -> ', JSON.stringify(res));
          alert('Dosya indirildi.');
        });
    }
  };

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  }; */

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
          <TouchableOpacity
            onPress={async () => {
              var check = await checkPermission(path);
              console.log(check);
              if (check) alert('Dosya indirildi.');
            }}>
            <Icon
              type="material"
              name="file-download"
              size={30}
              color="black"
            />
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
