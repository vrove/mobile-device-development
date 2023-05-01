import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import SubHeader from '../../components/molecules/SubHeader';
import Gap from '../../components/atoms/Gap';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Transaction from '../../components/molecules/Transaction';

const CashOnHand = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SubHeader title="Cash On Hand" navigation={navigation} />

      <Gap />

      <TextInput label="Description" placeHolder="Add the description" />
      <TextInput label="Type" placeHolder="Debit / Credit" />

      <Button label="Save" backgroundColor="#02CF8E" textColor="#020202" />

      <Gap />

      <Text style={styles.transaction}>Last 3 Transactions</Text>

      <Transaction
        date="17 April 2020"
        description="Water, Food"
        balance="-Rp. 300.000"
      />
      <Transaction
        date="18 April 2020"
        description="Office supplies"
        balance="-Rp. 300.000"
      />
      <Transaction
        date="19 April 2020"
        description="Top"
        balance="+Rp. 300.000"
      />
    </ScrollView>
  );
};

export default CashOnHand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  transaction: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    marginTop: 28,
    marginLeft: 28,
    marginRight: 28,
    marginBottom: 10,
  },
});
