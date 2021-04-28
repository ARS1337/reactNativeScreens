import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';

function Login(props) {
  return (
    <View style={styles.background}>
      <View style={styles.title}>
        <Image
          style={styles.menu}
          source={require('../imagess/IconOpenMenu.png')}
        />
        <View style={styles.heading}>
          <Image source={require('../imagess/BBVA_2019Login.png')} />
        </View>
      </View>
      <View style={styles.account}>
        <Image source={require('../imagess/Group2666.png')} />
      </View>
      <View>
        <Text style={styles.greeting}>Hello, Mauricio</Text>
        <Text style={styles.greetingExtended}>How was your day today?</Text>
      </View>
      <View style={styles.passwordContainer}>
        <Text style={styles.passwordLabel}>Password</Text>
      </View>
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.password}
          textContentType={'password'}
          autoCompleteType={'password'}
          secureTextEntry={true}
        />
        <Image
          style={styles.passwordEye}
          source={require('../imagess/IconFeatherEyeOff.png')}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}> I forgot my password</Text>
      </View>
      <View style={styles.optionsContainerAll}>
        <View style={styles.optionsContainer}>
          <Image
            style={styles.optionImage}
            source={require('../imagess/surface1.png')}
          />
          <Text style={styles.options}>Mobile Token</Text>
        </View>
        <View style={styles.optionsContainer}>
          <Image
            style={styles.optionImage}
            source={require('../imagess/qrCode.png')}
          />
          <Text style={styles.options}>Operation QR + CoDi</Text>
        </View>
        <View style={styles.optionsContainer}>
          <Image
            style={styles.optionImage}
            source={require('../imagess/phoneCall.png')}
          />
          <Text style={styles.options}>BBVA line</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'EuclidCircularA-Italic',
    fontSize: 60,
  },
  background: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    width: 'auto',
    height: '100%',
    padding: 20,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  menu: {},
  heading: {
    width: '90%',
    flexGrow: 0,
    alignItems: 'center',
  },
  account: {
    paddingTop: 50,
  },
  greeting: {
    color: '#004481',
    fontFamily: 'EuclidCircularA-Bold',
    fontSize: 30,
    paddingTop: 30,
  },
  greetingExtended: {
    fontFamily: 'EuclidCircularA-Regular',
    fontSize: 15,
    color: '#889FB4',
  },
  passwordLabel: {
    color: '#004481',
    fontSize: 14,
  },
  password: {
    color: '#004481',
    borderBottomWidth: 2,
    borderBottomColor: '#004481',
    width: '90%',
  },
  passwordContainer: {
    paddingTop: 40,
    flexDirection: 'column',
  },
  passwordInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    fontFamily: 'EuclidCircularA-SemiBold',
    fontSize: 15,
    color: '#004481',
  },
  forgotPassword: {
    color: '#004481',
    fontSize: 15,
    fontFamily: 'EuclidCircularA-Regular',
    padding: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-between',
  },
  optionsContainerAll: {
    justifyContent: 'space-evenly',
    flex: 1,
    width: '40%',
    paddingTop: 10,
  },
  optionImage: {
    marginRight: 15,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
});
export default Login;
