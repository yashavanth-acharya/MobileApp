import * as React from 'react';
import { Avatar, Button, Card, Text,TextInput } from 'react-native-paper';
import { StyleSheet,View } from 'react-native';
import { Link,useRouter } from "expo-router";
import { Stack } from 'expo-router';
import Background from '../components/Background';
const User = () => 
{
const [show,setshow]=React.useState(true)
const [show1,setshow1]=React.useState("")
const [show2,setshow2]=React.useState("")
const [show3,setshow3]=React.useState("")
const [show5,setshow4]=React.useState("")
const [show6,setshow6]=React.useState("")
const [sho7,setshow7]=React.useState("")



return(
 
  <>
  <Stack.Screen options={{title:"Rooms details"}}/>
  <View style={styles.background}>
  <Text  style={styles.icon} variant="titleLarge" >ADD Rooms</Text>
   
   
    
  <View style={styles.textfieldview}>
    <TextInput mode="outlined" label="Room Number" style={styles.textfield} onChangeText={(values)=>{setshow1(show1)}} />
    </View>
    <View style={styles.textfieldview}>
    <TextInput mode="outlined" label="Deatils" style={styles.textfield} onChangeText={(values)=>{setshow2(show2)}} />
    </View>
  
 
    
 
    
 
   
    <View style={styles.textfieldview}>
  
    <Button mode="contained" uppercase style={styles.button} onPress={()=>storeData()}>Submit</Button>
    </View>
 </View>
  </>
)};

const styles = StyleSheet.create({
    icon: {
      margin:10,
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
   
    button:{
        borderRadius:5,
        width:"100%",
        marginTop:10,
        backgroundColor:"#5271ff"
    },
    
    textfield:{
      borderColor:"#5271ff",
      width:"100%",
    },
    textfieldview:{
      marginBottom:10,
      width:"100%",
    }, background: {
        // flex: 1,
        width: '100%',
        height:'100%',
        // backgroundColor: "#ffff",
        marginTop:"50%",
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
      },

  });

export default User;