import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const label = () => {
  return (
    <View>
      <Text style={styles.welcome}>Registration</Text>
    </View>
  )
}

export default label

const styles = StyleSheet.create({
  welcome: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
})