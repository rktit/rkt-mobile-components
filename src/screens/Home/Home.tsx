import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  button: {
    width: '50%',
    padding: 20,
    margin: 30,
    borderRadius: 15,
    backgroundColor: '#3498DB'
  },
  buttonList: {
    width: '50%',
    padding: 20,
    margin: 30,
    borderRadius: 15,
    backgroundColor: '#A5FF32'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },
  buttonTextList: {
    textAlign: 'center',
    color: '#142995',
    fontSize: 16
  }
})
