import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet,View, } from 'react-native';
import Background from '../components/Background';
import { Provider as PaperProvider } from 'react-native-paper';

const EmptyLayout=({Param})=>{

    return(
        <PaperProvider>
        <Background style={styles.surface} >
            {Param}
        </Background>
        </PaperProvider>
    )
}

export default EmptyLayout

const styles = StyleSheet.create({
    surface: {
      height: '100%',
      width: "100%",
    },
  });