import React from 'react';

import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';

function Lastbar(props) {
  const {icons, setIcons} = props;

  let temp = (id, t) => {
    return (
      <View key={id}>
        <TouchableOpacity
          onPress={() => {
            let temp;
            temp = JSON.parse(JSON.stringify(icons));
            if (temp[id].show == false) {
              temp.forEach((x, idx, arr) => {
                arr[idx].show = false;
              });
              temp[id].show = !temp[id].show;
              setIcons(temp);
              console.log(id, t);
            }
          }}>
          <View style={styles.images}>
            {icons[id].show ? (
              <Image source={icons[id].selected} />
            ) : (
              <Image source={icons[id].unselected} />
            )}
            {icons[id].show ? (
              <Image
                style={{marginTop: 2}}
                source={require('../imagess/Ellipse.png')}
              />
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={[styles.cardOptions, styles.lastBar]}>
        {icons.map((x, id) => temp(id, x))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  lastBar: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: '10%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 0.5,
  },
  cardOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  images: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    minHeight: 35,
  },
});

export default Lastbar;
