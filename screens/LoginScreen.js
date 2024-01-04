import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { Button } from "@rneui/base";
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {};
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
