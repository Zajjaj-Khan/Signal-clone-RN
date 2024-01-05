import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Input } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { Button } from "@rneui/base";
import { auth } from "../firebase";
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(()=>{
   const unsubcribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        navigation.replace('Home')
      }
    });
    return unsubcribe
  },[])
  const signIn = () => {};
  const RegistorPressHandler = () =>{navigation.navigate('Register');}
  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/87/76/56/877656deda3e148c9804528ebfc25f9d.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input placeholder="Email" autoFocus type="email" />
        <Input placeholder="Password" secureTextEntry type="password" />
        <Button containerStyle={styles.button} title="Login" onPress={signIn} />
        <Button
          containerStyle={styles.button}
          type="outline"
          title="Registor"
          onPress={RegistorPressHandler}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer:{
    width:300
  },
  button: {
    width: 200,
    marginTop: 10,
    marginLeft:50
  },
});
