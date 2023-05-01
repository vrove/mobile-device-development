import React from 'react';
import {View, StyleSheet} from 'react-native';

import HomeHeader from '../../components/molecules/HomeHeader';
import Gap from '../../components/atoms/Gap';
import Balance from '../../components/molecules/Balance';
import AddTransaction from '../../components/molecules/AddTransaction';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HomeHeader title="Money Tracker" subTitle="Track your money" />
      <Gap />
      <Balance />
      <Gap />
      <AddTransaction navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
