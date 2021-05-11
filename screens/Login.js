import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Home from './Home';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login(props) {
  const [menu, showMenu] = useState(false);

  const [showPassword, setPassword] = useState(true);
  if (menu) return <Home menu={menu} showMenu={showMenu} />;
  else {
    return (
      <View>
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
              secureTextEntry={showPassword}
              onSubmitEditing={e => {
                showMenu(!menu);
              }}
            />

            <TouchableWithoutFeedback
              onPress={() => {
                setPassword(!showPassword);
              }}>
              <Icon
                style={styles.featherEye}
                size={24}
                color="#004481"
                name={showPassword ? 'eye-off' : 'eye'}
              />
            </TouchableWithoutFeedback>
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
        <View
          style={{
            backgroundColor: '#004481',
            height: 10,
            width: '100%',
            height: windowHeight * 0.05,
          }}></View>
      </View>
    );
  }
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
    padding: 20,
    height: windowHeight * 0.95,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  featherEye: {
    position: 'relative',
    left: -20,
  },
  menu: {},
  heading: {
    width: '90%',
    flexGrow: 0,
    alignItems: 'center',
  },
  account: {
    paddingTop: 35,
  },
  greeting: {
    color: '#004481',
    fontFamily: 'EuclidCircularA-Bold',
    fontSize: 30,
    paddingTop: 25,
  },
  greetingExtended: {
    fontFamily: 'EuclidCircularA-Regular',
    fontSize: 15,
    color: '#889FB4',
    marginBottom: 10,
  },
  passwordLabel: {
    color: '#004481',
    fontSize: 14,
  },
  password: {
    color: '#004481',
    borderBottomWidth: 2,
    borderBottomColor: '#004481',
    width: '100%',
  },
  passwordContainer: {
    paddingTop: 30,
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
    marginVertical: 15,
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
    paddingTop: 20,
  },
  optionImage: {
    marginRight: 15,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
});
export default Login;
