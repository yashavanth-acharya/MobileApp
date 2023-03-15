import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Asset } from 'expo-asset';

export default function Background({ children }) {
    
    // const [assets, error] = useAssets([require('../../assets/background_dot.png')]);
    // console.log(error)
  return (
    <ImageBackground
      source={require('../../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      {/* <KeyboardAvoidingView style={styles.container} behavior="padding"> */}
        {children}
      {/* </KeyboardAvoidingView> */}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height:'100%',
    backgroundColor: "#ffff",
    marginTop:60,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // container: {
  //   flex: 1,
  //   // padding: 20,
    
  // },
})