import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Button, Input } from "@rneui/base";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const RegistorScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Register",
    });
  }, [navigation]);

  const register = async () => {
    await createUserWithEmailAndPassword(auth,email, password)
      .then((authUser) => {
        authUser.user.update({
          displayNAme:name,
          photoURL:imageUrl || 'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg'
        })
      })
      .cath((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="ProfilePicture Url (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default RegistorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
    marginTop: 10,
  },
});
