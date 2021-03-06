import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import SwitchCustom from './SwitchCustom';
import TransactionList from './TransactionList';

function DetailsAccount(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {account, showAccount} = props;

  return (
    <View style={styles.background}>
      <View style={{flex: 0.4}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: '100%',
          }}>
          <View style={[styles.title, styles.flexRow, styles.spaceBetween]}>
            <TouchableOpacity
              onPress={() => {
                showAccount(false);
              }}>
              <Image source={require('../imagess/IconLeft.png')} />
            </TouchableOpacity>
            <Text style={styles.accountTitle}> Account * 37265</Text>
            <Image source={require('../imagess/AccountImageDetails.png')} />
          </View>

          <View style={styles.card}>
            <View style={styles.cardRow}>
              <Image source={require('../imagess/BBVA_2019DetailsCard.png')} />
              <Image source={require('../imagess/3DotsDetails.png')} />
            </View>
            <Text
              style={[
                styles.whiteColor,
                {fontFamily: 'EuclidCircularA-Medium', fontSize: 40},
              ]}>
              $20,000.00
            </Text>
            <Text
              style={[
                styles.whiteColor,
                {fontFamily: 'EuclidCircularA-Regular', fontSize: 12},
              ]}>
              Available balance
            </Text>
            <View style={styles.cardRow}>
              <Text
                style={[
                  styles.whiteColor,
                  {fontFamily: 'EuclidCircularA-Medium', fontSize: 17},
                ]}>
                001ah7297
              </Text>
              <Image source={require('../imagess/Visa.png')} />
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 0.6}}>
        <View style={{backgroundColor: 'white', marginVertical: 10}}>
          <View
            style={[
              styles.flexRow,
              ,
              {
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: 10,
                backgroundColor: 'white',
              },
            ]}>
            <View style={[styles.flexRow, {alignItems: 'center'}]}>
              <Image source={require('../imagess/IconCreditCard.png')} />
              <Text
                style={{
                  fontFamily: 'EuclidCircularA-Medium',
                  fontSize: 12,
                  marginLeft: 5,
                  color: '#004481',
                }}>
                Card detail
              </Text>
            </View>
            <View
              style={[
                styles.flexRow,
                {
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  width: '40%',
                },
              ]}>
              <Text
                style={{
                  fontFamily: 'EuclidCircularA-Medium',
                  fontSize: 12,
                  color: '#004481',
                }}>
                Turn off card
              </Text>
              <SwitchCustom />
            </View>
          </View>
          <View style={styles.holdsCircleIcons}>
            <View style={[styles.flex25]}>
              <View
                style={[
                  styles.circleShape,
                  styles.circle1,
                  styles.alignCenter,
                  styles.justifyCenter,
                  styles.MarginBottom5,
                ]}>
                <Image source={require('../imagess/IconShopping.png')} />
              </View>
              <Text style={[styles.font11Medium]}> Pay service</Text>
            </View>
            <View style={[styles.flex25]}>
              <View
                style={[
                  styles.circleShape,
                  styles.circle2,
                  styles.alignCenter,
                  styles.justifyCenter,
                  styles.MarginBottom5,
                ]}>
                <Image source={require('../imagess/IconMoney.png')} />
              </View>
              <Text style={[styles.font11Medium]}>To transfer</Text>
            </View>
            <View style={[styles.flex25]}>
              <View
                style={[
                  styles.circleShape,
                  styles.circle3,
                  styles.alignCenter,
                  styles.justifyCenter,
                  styles.MarginBottom5,
                ]}>
                <Image source={require('../imagess/IconArrow.png')} />
              </View>
              <Text style={[styles.font11Medium]}>withdrawal</Text>
            </View>
            <View style={[styles.flex25]}>
              <View
                style={[
                  styles.circleShape,
                  styles.circle4,
                  styles.alignCenter,
                  styles.justifyCenter,
                  styles.MarginBottom5,
                ]}>
                <Image source={require('../imagess/3DotsDetails.png')} />
              </View>
              <Text style={[styles.font11Medium]}>6 more</Text>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: 'white', flex: 1}}>
          <TransactionList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E5F0F6',
    display: 'flex',
    height: '100%',
  },
  colorLightBlue: {
    color: '#8294CC',
  },
  font16Bold: {
    fontFamily: 'EuclidCircularA-Bold',
    fontSize: 16,
  },
  font10Regular: {
    fontFamily: 'EuclidCircularA-Regular',
    fontSize: 10,
  },
  transactionCenter: {
    width: '80%',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  flex25: {
    height: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    alignItems: 'flex-start',
    padding: 25,
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
  },
  accountTitle: {
    color: '#004481',
    fontSize: 20,
    fontFamily: 'EuclidCircularA-Bold',
  },
  font15Medium: {
    fontFamily: 'EuclidCircularA-Medium',
    fontSize: 15,
    color: '#163F76',
  },
  font11Medium: {
    fontFamily: 'EuclidCircularA-Medium',
    fontSize: 11,
    color: '#4B637A',
  },
  MarginBottom5: {
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#004481',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 15,
    width: '95%',
    position: 'absolute',
    top: '25%',
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  whiteColor: {
    color: 'white',
  },
  circleShape: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
  },
  circle1: {
    backgroundColor: '#3767F0',
  },
  circle2: {
    backgroundColor: '#4CABCE',
  },
  circle3: {
    backgroundColor: '#49D17C',
  },
  circle4: {
    backgroundColor: '#004481',
  },
  holdsCircleIcons: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

export default DetailsAccount;
