import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SubHeader from '../../components/molecules/SubHeader';
import Gap from '../../components/atoms/Gap';
import AddPhoto from '../../components/molecules/AddPhoto';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import SignUpError from '../../components/molecules/SignUpError';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SubHeader title="Sign Up" navigation={navigation} />
      <Gap />
      <AddPhoto />
      <TextInput label="Full Name" placeHolder="Type your full name" />
      <TextInput label="Email Address" placeHolder="Type your email address" />
      <TextInput label="Password" placeHolder="Type your password" />
      <Button label="continue" backgroundColor="#02CF8E" textColor="#020202" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
