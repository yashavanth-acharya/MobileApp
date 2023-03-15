import * as React from 'react';
import { Badge } from 'react-native-paper';
import Background from '../components/Background';
import { Stack } from 'expo-router';
const MyComponent = () => (
  //   <Background>
  // </Background>
  <>
  <Stack.Screen options={{title:"Home"}}/>
  </>
);

export default MyComponent;