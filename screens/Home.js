import React, {useState} from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Switch,
} from 'react-native';

import DetailsAccount from './DetailsAccount';
import Lastbar from './Lastbar';

function Home(props) {
  const {menu, showMenu} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [account, showAccount] = useState(false);
  const [icons, setIcons] = useState([
    {
      show: true,
      selected: require('../imagess/fountainpenPoint.png'),
      unselected: require('../imagess/IconFountain.png'),
    },
    {
      show: false,
      selected: require('../imagess/IconMessageSelected.png'),
      unselected: require('../imagess/IconMessage.png'),
    },
    {
      show: false,
      selected: require('../imagess/IconHealthSelected.png'),
      unselected: require('../imagess/Path24.png'),
    },
    {
      show: false,
      selected: require('../imagess/IconPlusSelected.png'),
      unselected: require('../imagess/IconPlus.png'),
    },
  ]);

  if (account) {
    return <DetailsAccount account={account} showAccount={showAccount} />;
  } else if (icons[0].show == true) {
    console.log('icon0');
    return (
      <View style={styles.background}>
        <View
          style={{
            flex: 0.92,
            alignItems: 'center',
            width: '100%',
          }}>
          <View style={[styles.title, styles.flexRow, styles.spaceBetween]}>
            <TouchableWithoutFeedback
              onPress={() => {
                showMenu(!menu);
              }}>
              <Image source={require('../imagess/IconOpenMenuHome.png')} />
            </TouchableWithoutFeedback>
            <Text style={[styles.font20Bold, {color: 'white'}]}>
              Hello, Mauricio
            </Text>
            <TouchableOpacity
              onPress={() => {
                showAccount(true);
              }}>
              <Image source={require('../imagess/AccountImageDetails.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View style={[styles.cardRow]}>
              <Text style={[styles.blueColor, styles.font16Bold]}>
                YOUR ACCOUNTS
              </Text>
              <Image source={require('../imagess/3DotsHome.png')} />
            </View>

            <View style={[styles.cardRow]}>
              <View>
                <Text style={[styles.blueColor, styles.font17Medium]}>
                  001ah7297
                </Text>
                <Text style={{color: '#839BB1'}}>*37265</Text>
              </View>
              <View>
                <Text style={[styles.blueColor, styles.font20Medium]}>
                  $20,000
                </Text>
              </View>
              <View>
                <Image source={require('../imagess/IconChevronRight.png')} />
              </View>
            </View>

            <View style={[styles.cardRow]}>
              <View>
                <Text style={[styles.blueColor, styles.font17Medium]}>
                  001ah7297
                </Text>
                <Text style={{color: '#839BB1'}}>*37265</Text>
              </View>
              <View>
                <Text style={[styles.blueColor, styles.font20Medium]}>
                  $20,000
                </Text>
              </View>
              <View>
                <Image source={require('../imagess/IconChevronRight.png')} />
              </View>
            </View>
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
                ,
              ]}>
              <Image source={require('../imagess/IconPlusHome.png')} />
            </View>
            <Text style={[styles.font11Medium]}> Opportunities</Text>
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
              <Image source={require('../imagess/3DotsDetails.png')} />
            </View>
            <Text style={[styles.font11Medium]}>To Transfer</Text>
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
              <Image source={require('../imagess/3DotsDetails.png')} />
            </View>
            <Text style={[styles.font11Medium]}>Cardless withdrawal</Text>
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
              <Image source={require('../imagess/IconSettingsHome.png')} />
            </View>
            <Text style={[styles.font11Medium]}>Pay service</Text>
          </View>
        </View>

        <View style={styles.bottomCardHome}>
          <Text style={[styles.colorBlue, styles.font16Bold]}>Your cards</Text>
          <View style={styles.bottomCardContainer}>
            <View style={styles.leftCard}>
              <View style={[styles.leftBlueCard]}>
                <View>
                  <Text style={[styles.MarginBottom5, styles.colorWhite]}>
                    BBVA
                  </Text>
                  <Image
                    style={styles.MarginBottom5}
                    source={require('../imagess/IconCardGold.png')}
                  />
                  <Text style={[styles.MarginBottom5, styles.colorWhite]}>
                    *62396
                  </Text>
                </View>

                <View>
                  <Image
                    style={styles.MarginBottom5}
                    source={require('../imagess/Visa.png')}
                  />
                </View>
              </View>
              <View style={styles.cardOptions}>
                <View style={styles.cardOptionsRow}>
                  <Image source={require('../imagess/IconCreditCard.png')} />
                  <Text style={[styles.colorBlue]}> Digital card</Text>
                </View>
                <View style={styles.cardOptionsRow}>
                  <Text style={[styles.colorBlue]}>Deactivate</Text>
                  {/* <Image source={require('../imagess/slideLock.png')} /> */}
                  <Switch onValueChange={toggleSwitch} value={isEnabled} />
                </View>
              </View>
            </View>

            <View style={[styles.rightWhiteCard]}>
              <View>
                <Text
                  style={[
                    styles.MarginBottom6,
                    styles.blueColor,
                    styles.font16Bold,
                  ]}>
                  BBVA
                </Text>
                <Image
                  style={styles.MarginBottom6}
                  source={require('../imagess/IconCardGold.png')}
                />
                <Text style={[styles.MarginBottom6, styles.blueColor]}>
                  *62396
                </Text>
              </View>

              <View>
                <Image
                  style={{transform: [{rotate: '90deg'}]}}
                  source={require('../imagess/VisaBlue.png')}
                />
              </View>
            </View>
          </View>
        </View>

        <Lastbar icons={icons} setIcons={setIcons} />
      </View>
    );
  } else if (icons[1].show == true) {
    console.log('icon0');

    return (
      <View style={{height: '100%'}}>
        <Text>no new messages</Text>
        <Lastbar icons={icons} setIcons={setIcons} />
      </View>
    );
  } else if (icons[2].show == true) {
    console.log('icon0');

    return (
      <View style={{height: '100%'}}>
        <Text>new page</Text>
        <Lastbar icons={icons} setIcons={setIcons} />
      </View>
    );
  } else if (icons[3].show == true) {
    console.log('icon0');

    return (
      <View style={{height: '100%'}}>
        <Text>new page 2</Text>
        <Lastbar icons={icons} setIcons={setIcons} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconBlur: {
    color: '#86A6C3',
  },
  iconFocus: {
    color: '#004481',
  },
  background: {
    backgroundColor: '#E5F0FF',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  },
  colorWhite: {
    color: 'white',
  },
  colorBlue: {
    color: '#004481',
  },
  cardOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardOptionsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.4,
    justifyContent: 'space-between',
  },
  bottomCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  rightWhiteCard: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 5,
    padding: 20,
    transform: [{rotate: '270deg'}],
  },
  leftBlueCard: {
    backgroundColor: '#004481',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  leftCard: {
    width: '60%',
  },
  bottomCardHome: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 50,
  },
  holdsCircleIcons: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  font11Medium: {
    fontFamily: 'EuclidCircularA-Medium',
    fontSize: 11,
    color: '#4B637A',
  },
  flex25: {
    flex: 0.23,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center',
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
  blueColor: {
    color: '#004481',
  },
  font16Bold: {
    fontFamily: 'EuclidCircularA-Bold',
    fontSize: 16,
  },
  font17Medium: {
    fontFamily: 'EuclidCircularA-Medium',
    fontSize: 17,
  },
  font20Medium: {
    fontFamily: 'EuclidCircularA-Medium',
    fontSize: 20,
  },
  title: {
    alignItems: 'center',
    backgroundColor: '#004481',
    alignItems: 'flex-start',
    padding: 25,
    width: '100%',
    height: '60%',
  },
  flexRow: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  font20Bold: {
    fontFamily: 'EuclidCircularA-Bold',
    fontSize: 20,
  },
  card: {
    alignItems: 'center',
    borderRadius: 7,
    padding: 15,
    backgroundColor: 'white',
    width: '95%',
    position: 'absolute',
    top: '30%',
  },
  MarginBottom5: {
    marginBottom: 14,
  },
  MarginBottom6: {
    marginBottom: 8,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
});

export default Home;
