import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SingleBox = ({ increaseColor, decreaseColor, color }) => {
  return (
    <View
      style={{ display: "flex", alignItems: "flex-start", marginBottom: 20 }}
    >
      <View>
        <Text style={{ textAlign: "left", fontSize: 18 }}>{color}</Text>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity onPress={increaseColor} style={styles.btn}>
          <Text style={styles.btnText}>{`Increase ${color}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decreaseColor} style={styles.btn}>
          <Text style={styles.btnText}>{`Decrease ${color}`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleBox;

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderColor: "#E7E84C",
    borderWidth: 1,
    width: 310,
    backgroundColor: "#FBFF87",
    borderRadius: 4
  },
  btnText: {
    fontSize: 18
  }
});
