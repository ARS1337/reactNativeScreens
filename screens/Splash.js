import React from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';

function Splash(props) {
  return (
    <SafeAreaView>
      <View style={styles.splashBackground}>
        {/* <Text style={styles.splashText}>BBVA</Text> */}
        <Image source={require('../imagess/BBVA_2019Splash.png')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashBackground: {
    backgroundColor: '#004481',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'EuclidCircularA-Regular',
  },
});
export default Splash;
