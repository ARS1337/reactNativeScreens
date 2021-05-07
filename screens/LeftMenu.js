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

function LeftMenu(props) {
  const {LeftMenu, showLeftMenu} = props;
  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={[styles.title, styles.flexRow, styles.spaceBetween]}>
            <TouchableWithoutFeedback
              onPress={() => {
                showLeftMenu(false);
              }}>
              <Image source={require('../imagess/IconOpenMenu.png')} />
            </TouchableWithoutFeedback>
            <Text style={[styles.font20Bold, {color: 'white'}]}>
              Hello, Mauricio
            </Text>
            <TouchableOpacity
              onPress={() => {
                showAccount(true);
              }}>
              <Image
                style={{display: 'none'}}
                source={require('../imagess/AccountImageDetails.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
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
});

export default LeftMenu;
