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
            // Object.assign(temp, icons);
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
          {icons[id].show ? (
            <Image source={icons[id].selected} />
          ) : (
            <Image source={icons[id].unselected} />
          )}
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
    backgroundColor: 'grey',
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
