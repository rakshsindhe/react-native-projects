import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

const TextScreen = props => {
  const { navigation } = props;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = () => {
    if (name.length > 0) {
      navigation.navigate("UserScreen", { userName: name });
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={{ marginBottom: 16, display: "flex" }}>
        <Text style={{ fontSize: 22, alignItems: "flex-start" }}>Sign Up</Text>
      </View>
      <TextInput
        style={{ ...styles.input, marginBottom: 16 }}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter your name"
      ></TextInput>
      <TextInput
        style={{ ...styles.input, marginBottom: 5 }}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry={true}
      ></TextInput>
      {password.length < 5 ? (
        <View>
          <Text style={styles.errorText}>
            Your password should contain more than 4 characters.
          </Text>
        </View>
      ) : null}
      <View style={{ marginTop: 16 }}>
        <TouchableOpacity style={styles.routeBtn} onPress={handleFormSubmit}>
          <Text style={styles.routeBtnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  formContainer: {
    padding: 25,
    display: "flex",
    alignItems: "flex-start",
    flex: 1,
    backgroundColor: "#ffe7ba"
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 16,
    width: 300,
    borderRadius: 6
  },
  errorText: {
    color: "#ff4d4f",
    fontSize: 12
  },
  routeBtn: {
    display: "flex",
    alignItems: "center",
    padding: 12,
    borderColor: "#89C2D9",
    borderWidth: 1,
    backgroundColor: "#89C2D9",
    borderRadius: 5,
    marginBottom: 20,
    width: 100
  },
  routeBtnText: {
    fontSize: 18
  }
});
