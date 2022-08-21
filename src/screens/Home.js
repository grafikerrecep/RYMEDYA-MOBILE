import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {WebSitePageButton} from '../components/WebSitePageButton';
import { LoginForm } from '../components/LoginForm';

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerImageView}>
        <Image
          style={styles.headerImage}
          source={{
            uri: 'https://nebosan.com.tr/wp-content/uploads/2018/06/no-image.jpg',
          }}
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
    width: 200,
    height: 120,
  },
  homePageButtonContainer: {
    marginTop: 25,
  },
  subTitleContainer: {
    marginTop: 35,
  },
  subTitle: {
    fontSize: 18,
    color: '#733eb2',
    fontWeight: '450',
  },
  formContainer: {
    marginTop: 75,
  },
  formTitle: {
    fontSize: 18,
    color: '#23C6FC',
  },
  formLines: {
    borderBottomColor: '#62d5c1',
    borderBottomWidth: 2,
    width: 35,
    marginLeft: 20,
    marginTop: 5,
  },
});

export default Home;
