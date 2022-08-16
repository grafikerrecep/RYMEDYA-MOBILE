import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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
        <Text>Home Screen</Text>
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
});

export default Home;
