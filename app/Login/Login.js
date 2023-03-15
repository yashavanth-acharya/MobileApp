import * as React from 'react';
import { Avatar, Button, Card, Text,TextInput } from 'react-native-paper';
import { StyleSheet,View } from 'react-native';
import { Link,useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PaperSelect } from 'react-native-paper-select';
import Background from '../components/Background';
import Logo from '../components/Logo';
const CenterIcon = () => <Avatar.Icon  icon="folder"  style={styles.icon}/>

const Login = () => {
const router = useRouter();
const [show,setshow]=React.useState(true)
const [username,setusername]=React.useState("")
const [password,setpassword]=React.useState("")
const [userType, setuserType] = React.useState({
  value: '',
  list: [
    { _id: '1', value: 'ADMIN' },
    { _id: '2', value: 'Caterers' },
    { _id: '3', value: 'STUDENT' },
    { _id: '4', value: 'Other' },

  ],
  selectedList: [],
  error: '',
});

const storeData = async () => {
  try {
    // await AsyncStorage.setItem('@username', username)
    // await AsyncStorage.setItem('@password', password)
    if(username && password){
      router.push("/Dashboard/home")
    }
  } catch (e) {
    // saving error
    console.log(e)
  }
}
return(
  <Background>
    {/* <CenterIcon  style={styles.centericon}/> */}
    <Logo/>
    <Text  style={styles.icon} variant="titleLarge" >Login</Text>
    <PaperSelect
        label="User type"
        value={userType.value}
        onSelection={(value) => {
          setuserType({
            ...userType,
            value: value.text,
            selectedList: value.selectedList,
            error: '',
          });
        }}
        arrayList={[...userType.list]}
        selectedArrayList={[...userType.selectedList]}
        errorText={userType.error}
        multiEnable={false}
      />
      <View style={styles.textfieldview}>
    <TextInput mode="outlined" label="Username" style={styles.textfield} onChangeText={(values)=>{setusername(values)}} />
    </View>
    <View style={styles.textfieldview}>
    <TextInput mode="outlined" label="Password" style={styles.textfield} onChangeText={(values)=>{setpassword(values)}} secureTextEntry={show} right={<TextInput.Icon icon={show ? "eye-off": "eye"} onPress={()=>setshow(!show)} />}/>
    </View>
    <View style={styles.forgotPassword}>
        <Link  style={styles.forgot} href="/forgotpassword">Forgot Password</Link>
    </View>
    <Button mode="contained" uppercase style={styles.button} onPress={()=>storeData()}>Login</Button>

  {/* </Card> */}
  </Background>
  )
};




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
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    forgot: {
      fontSize: 13,
      textDecorationLine:'underline',
      color:"#5271ff"
    },
    textfield:{
      borderColor:"#5271ff",
      width:"100%",
    },
    textfieldview:{
      marginBottom:10,
      width:"100%",
    }

  });
  export default Login;