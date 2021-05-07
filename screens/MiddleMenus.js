import React from 'react';
import {FlatList, Text, StyleSheet, View, Image} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function MiddleMenus(props) {
  let cntr = 0;
  const data = [
    {
      imageurl: require('../imagess/IconPlusHome.png'),
      desc: 'Opportunities',
      css: {
        backgroundColor: '#3767F0',
      },
    },
    {
      imageurl: require('../imagess/3DotsDetails.png'),
      desc: 'to transfer',
      css: {
        backgroundColor: '#4CABCE',
      },
    },
    {
      imageurl: require('../imagess/3DotsDetails.png'),
      desc: 'cardless withdrawal',
      css: {
        backgroundColor: '#49D17C',
      },
    },
    {
      imageurl: require('../imagess/IconSettingsHome.png'),
      desc: 'pay services',
      css: {
        backgroundColor: '#004481',
      },
    },
    {
      imageurl: require('../imagess/IconPlusHome.png'),
      desc: 'Opportunities',
      css: {
        backgroundColor: '#3767F0',
      },
    },
    {
      imageurl: require('../imagess/3DotsDetails.png'),
      desc: 'to transfer',
      css: {
        backgroundColor: '#4CABCE',
      },
    },
    {
      imageurl: require('../imagess/3DotsDetails.png'),
      desc: 'cardless withdrawal',
      css: {
        backgroundColor: '#49D17C',
      },
    },
    {
      imageurl: require('../imagess/IconSettingsHome.png'),
      desc: 'pay services',
      css: {
        backgroundColor: '#004481',
      },
    },
  ];
  const Menus = item => {
    console.log(item.item.imageurl);
    return (
      <View style={[styles.flex25]}>
        <View
          style={[
            styles.circleShape,
            item.item.css,
            styles.alignCenter,
            styles.justifyCenter,
            styles.MarginBottom5,
            ,
          ]}>
          <Image source={item.item.imageurl} />
        </View>
        <Text style={[styles.font11Medium]}>
          {item.item.desc.toString().substr(0, 12) + '...'}
        </Text>
      </View>
    );
  };
  return (
    <>
      <View style={styles.holdsCircleIcons}>
        <FlatList
          data={data}
          keyExtractor={() => {
            cntr++;
          }}
          horizontal={true}
          renderItem={x => <Menus item={x.item} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  holdsCircleIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    height: '90%',
    backgroundColor: 'white',
  },
  flex25: {
    flex: 0.25,
    flexWrap: 'wrap',
    alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
    width: windowWidth / 4,
    flexWrap: 'wrap',
    height: '100%',
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
  font11Medium: {
    fontFamily: 'EuclidCircularA-Medium',
    fontSize: 11,
    color: '#4B637A',
  },
  MarginBottom5: {
    marginBottom: 8,
  },
});

export default MiddleMenus;
