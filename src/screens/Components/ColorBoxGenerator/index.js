import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import SingleBox from "./SingleBox";

const COLOR_INCREMENT = 15;
const initialState = {
  red: 0,
  green: 0,
  blue: 0
};

const reducer = (state, action) => {
  const { type, payload } = action;
  const { red, green, blue } = state;
  switch (type) {
    case "red":
      return red + payload > 255 || red + payload < 0
        ? state
        : {
            ...state,
            red: red + payload
          };

    case "green":
      return green + payload > 255 || green + payload < 0
        ? state
        : {
            ...state,
            green: green + payload
          };

    case "blue":
      return blue + payload > 255 || blue + payload < 0
        ? state
        : {
            ...state,
            blue: blue + payload
          };

    default:
      state;
  }
};

const ColorBoxGenerator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red = 0, green = 0, blue = 0 } = state;

  console.log(`Red = ${red}, Green = ${green}, Blue = ${blue}`);

  return (
    <View style={styles.coloBoxAppWrapper}>
      <View>
        <SingleBox
          color={"Red"}
          increaseColor={() =>
            dispatch({ type: "red", payload: COLOR_INCREMENT })
          }
          decreaseColor={() =>
            dispatch({ type: "red", payload: -1 * COLOR_INCREMENT })
          }
        />
        <SingleBox
          color={"Green"}
          increaseColor={() =>
            dispatch({ type: "green", payload: COLOR_INCREMENT })
          }
          decreaseColor={() =>
            dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })
          }
        />
        <SingleBox
          color={"Blue"}
          increaseColor={() =>
            dispatch({ type: "blue", payload: COLOR_INCREMENT })
          }
          decreaseColor={() =>
            dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })
          }
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
