import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentScreen = () => {
  return (
    <View style={{ backgroundColor: "#D8F0F2", display: "flex", flex: 1 }}>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          padding: 16
        }}
      >
        Component Screen
      </Text>
    </View>
  );
};

export default ComponentScreen;

const styles = StyleSheet.create({});
