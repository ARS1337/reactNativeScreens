import React from 'react';

import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';

function Lastbar(props) {
  const [icons, setIcons] = useState([true, false, false, false]);

  let temp = (id, t) => {
    console.log(id, t);

    return (
      <View key={id}>
        <TouchableOpacity
          onPress={() => {
            console.log(id, icons[id].toString());
            let gg = icons[id] ? t.selected : t.unselected;
            console.log(gg, 'df');
            let temp = icons;
            temp[id] = !temp[id];
            setIcons(temp);
          }}>
          <Image key={id} source={icons[id] ? t.selected : t.unselected} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={[styles.cardOptions, styles.lastBar]}>
        {[
          {
            selected: require('../imagess/IconMessageSelected.png'),
            unselected: require('../imagess/IconMessage.png'),
          },
          {
            selected: require('../imagess/fountainpenPoint.png'),
            unselected: require('../imagess/IconFountain.png'),
          },
          {
            selected: require('../imagess/IconHealth.png'),
            unselected: require('../imagess/IconHealth.png'),
          },
          {
            selected: require('../imagess/IconPlusSelected.png'),
            unselected: require('../imagess/IconPlus.png'),
          },
        ].map((x, id) => temp(id, x))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  lastBar: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 8,
    padding: 15,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: '10%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cardOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default Lastbar;
