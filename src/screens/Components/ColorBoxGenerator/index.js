import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SingleBox from "./SingleBox";

const ColorBoxGenerator = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  const COLOR_INCREMENT = 15;
  console.log(`Red = ${red}, Green = ${green}, Blue = ${blue}`);
  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;

      default:
        return;
    }
  };

  return (
    <View style={styles.coloBoxAppWrapper}>
      <View>
        <SingleBox
          color={"Red"}
          increaseColor={() => setColor("red", COLOR_INCREMENT)}
          decreaseColor={() => setColor("red", -1 * COLOR_INCREMENT)}
        />
        <SingleBox
          color={"Green"}
          increaseColor={() => setColor("green", COLOR_INCREMENT)}
          decreaseColor={() => setColor("green", -1 * COLOR_INCREMENT)}
        />
        <SingleBox
          color={"Blue"}
          increaseColor={() => setColor("blue", COLOR_INCREMENT)}
          decreaseColor={() => setColor("blue", -1 * COLOR_INCREMENT)}
        />
      </View>
      <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coloBoxAppWrapper: {
    padding: 20,
    marginBottom: 30,
    display: "flex",
    flex: 1
  }
});

export default ColorBoxGenerator;
