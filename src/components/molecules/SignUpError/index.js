import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SignUpError = () => {
  return (
    <View style={styles.container}>
      <Text>Email sudah terdaftar pada aplikasi</Text>
      <Image
        source={{
          uri: '../../../assets/images/cancel_24px_outlined.png',
        }}
      />
    </View>
  );
};

export default SignUpError;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
});
