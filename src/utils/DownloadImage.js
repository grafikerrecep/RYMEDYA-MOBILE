import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {API_URL} from '@env';

const getExtention = filename => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

const downloadImage = path => {
  console.log(path);
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

export const checkPermission = async path => {
  console.log(path);
  if (Platform.OS === 'ios') {
    downloadImage(path);
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
        downloadImage(path);
        return true;
      } else {
        console.log('Camera permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
};
