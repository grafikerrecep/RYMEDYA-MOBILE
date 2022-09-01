import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {WebSitePageButton} from '../components/WebSitePageButton';
import {LoginForm} from '../components/LoginForm';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerImageView}>
        <Image
          style={styles.headerImage}
          source={require('../assets/images/rymedya.png')}
        />
      </View>
      <View style={styles.homePageButtonContainer}>
        <WebSitePageButton />
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={[styles.subTitle, {marginLeft: 10}]}>
          Alışveriş yapın veya
        </Text>
        <Text style={styles.subTitle}>tasarımınızı takip edin.</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Giriş Yap</Text>
        <View style={styles.formLines}></View>
        <LoginForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerImageView: {
    marginTop: 50,
  },
  headerImage: {
  
  },
  homePageButtonContainer: {
    marginTop: 25,
  },
  subTitleContainer: {
    marginTop: 50,
  },
  subTitle: {
    fontSize: 19,
    color: '#733eb2',
    fontWeight: '490',
  },
  formContainer: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 18,
    color: '#23C6FC',
  },
  formLines: {
    borderBottomColor: '#62d5c1',
    borderBottomWidth: 1.5,
    width: 35,
    marginLeft: 0,
    marginTop: 5,
  },
});

export default Home;
