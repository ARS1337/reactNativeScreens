import React from 'react';
import {FlatList, Text, StyleSheet, View, Image} from 'react-native';
import {Dimensions} from 'react-native';
import SwitchCustom from './SwitchCustom';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeCard(props) {
  let cntr = 0;
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const Card = () => {
    return (
      <View style={styles.bottomCardHome}>
        <View style={{flex: 0.2}}>
          <Text style={[styles.colorBlue, styles.font16Bold]}>Your cards</Text>
        </View>
        <View style={{flex: 0.8}}>
          <View style={styles.bottomCardContainer}>
            <View style={styles.leftCard}>
              <View style={{flex: 0.8}}>
                <View style={[styles.leftBlueCard]}>
                  <View>
                    <Text style={[styles.MarginBottom5, styles.colorWhite]}>
                      BBVA
                    </Text>
                    <Image
                      style={styles.MarginBottom5}
                      source={require('../imagess/IconCardGold.png')}
                    />
                    <Text style={[styles.MarginBottom5, styles.colorWhite, ,]}>
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
              </View>

              <View style={styles.cardOptions}>
                <View style={styles.cardOptionsRow}>
                  <Image source={require('../imagess/IconCreditCard.png')} />
                  <Text style={[styles.colorBlue, styles.font11Medium]}>
                    {' '}
                    Digital card
                  </Text>
                </View>
                <View style={styles.cardOptionsRow}>
                  <Text
                    style={[
                      styles.colorBlue,
                      {paddingRight: 5},
                      styles.font11Medium,
                    ]}>
                    Deactivate
                  </Text>
                  <SwitchCustom />
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
                <Text
                  style={[
                    styles.MarginBottom6,
                    styles.blueColor,
                    {fontFamily: 'EuclidCircularA-Medium', fontSize: 15},
                  ]}>
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
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={() => {
          cntr++;
        }}
        horizontal={true}
        renderItem={x => <Card item={x.item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
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
    flex: 0.2,
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
    flex: 1,
  },
  rightWhiteCard: {
    width: (windowWidth / 10) * 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 5,
    padding: 10,
    transform: [{rotate: '270deg'}],
    flex: 0.4,
  },
  leftBlueCard: {
    backgroundColor: '#004481',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
    // marginBottom: 10,
    marginTop: 10,
  },
  leftCard: {
    width: (windowWidth / 10) * 6,
    justifyContent: 'space-evenly',
    flex: 0.75,
  },
  bottomCardHome: {
    width: windowWidth,
    backgroundColor: 'white',
    marginBottom: 10,
    justifyContent: 'flex-end',
    padding: 10,
  },
  font11Medium: {
    fontFamily: 'EuclidCircularA-Medium',
    fontSize: 11,
    color: '#4B637A',
  },

  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center',
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
    paddingHorizontal: 15,
    paddingVertical: 0,
    backgroundColor: 'white',
    width: '95%',
    position: 'absolute',
    top: '25%',
  },
  MarginBottom5: {
    marginBottom: 10,
  },
  MarginBottom6: {
    marginBottom: 8,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
  },
});

export default HomeCard;
