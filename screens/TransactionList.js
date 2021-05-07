import React from 'react';
import {SectionList, Text, StyleSheet, View, Image} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function TransactionList(props) {
  const data = [
    {
      title: 'Last movements',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
        {
          title: 'Spei enviado azteca',
          from: 'Interbank transfer',
          amount: '- $ 1,600.00',
          when: 'Today',
        },
      ],
    },

    {
      title: 'January 2',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
      ],
    },
    {
      title: 'last Movements',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
        {
          title: 'Spei enviado azteca',
          from: 'Interbank transfer',
          amount: '- $ 1,600.00',
          when: 'Today',
        },
      ],
    },

    {
      title: 'January 2',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
      ],
    },
    {
      title: 'Last movements',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
        {
          title: 'Spei enviado azteca',
          from: 'Interbank transfer',
          amount: '- $ 1,600.00',
          when: 'Today',
        },
      ],
    },

    {
      title: 'January 2',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
      ],
    },
    {
      title: 'last Movements',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
        {
          title: 'Spei enviado azteca',
          from: 'Interbank transfer',
          amount: '- $ 1,600.00',
          when: 'Today',
        },
      ],
    },

    {
      title: 'January 2',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
      ],
    },
    {
      title: 'Last movements',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
        {
          title: 'Spei enviado azteca',
          from: 'Interbank transfer',
          amount: '- $ 1,600.00',
          when: 'Today',
        },
      ],
    },

    {
      title: 'January 2',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
      ],
    },
    {
      title: 'Last movements',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
        {
          title: 'Spei enviado azteca',
          from: 'Interbank transfer',
          amount: '- $ 1,600.00',
          when: 'Today',
        },
      ],
    },

    {
      title: 'January 2',
      data: [
        {
          title: 'Your payment in cash',
          from: 'BBVA movement',
          amount: '+ $ 1,600.00',
          when: 'Today',
        },
      ],
    },
  ];
  const Details = item => {
    console.log(item.item);
    const data = item.item;
    return (
      <View style={styles.transactionCenter}>
        <View style={[styles.flexRow, styles.spaceBetween]}>
          <Text style={[styles.font15Medium]}>{data.title}</Text>
          <Text
            style={[
              styles.font16Bold,
              data.amount.toString().substr(0, 1) == '-'
                ? {color: '#E06273'}
                : {color: '#5FBE83'},
            ]}>
            {data.amount}
          </Text>
        </View>
        <View style={[styles.flexRow, styles.spaceBetween]}>
          <Text style={[styles.font10Regular, styles.colorLightBlue]}>
            {' '}
            {data.from}
          </Text>
          <Text style={[styles.font10Regular, styles.colorLightBlue]}>
            {data.when}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SectionList
      style={{backgroundColor: 'white'}}
      sections={data}
      renderItem={({item}) => <Details item={item} />}
      keyExtractor={(item, index) => index}
      renderSectionHeader={({section: {title}}) => (
        <View>
          <Text
            style={[
              styles.font16Bold,
              {
                color: '#004481',
                paddingBottom: 5,
                paddingTop: 10,
                marginLeft: 20,
              },
            ]}>
            {title}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  transactionCenter: {
    width: '80%',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
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
  font15Medium: {
    fontFamily: 'EuclidCircularA-Medium',
    fontSize: 15,
    color: '#163F76',
  },
});

export default TransactionList;
