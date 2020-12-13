import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserScreen = props => {
  const { navigation } = props;
  const userName = navigation.getParam("userName", "");
  return (
    <View style={{ display: "flex", flex: 1, padding: 20 }}>
      <Text
        style={{ fontSize: 18 }}
      >{`Hi ${userName}, welcome to our organisation!`}</Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
