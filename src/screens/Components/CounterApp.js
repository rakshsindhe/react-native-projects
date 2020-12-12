import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const RANGE = 10;
const initialState = {
  count: 0
};

const reducer = (state, action) => {
  const { count } = state;
  const { type, payload } = action;

  switch (type) {
    case "increment":
      return {
        count: count + payload
      };

    case "decrement":
      return {
        count: count - payload
      };

    case "reset":
      return initialState;

    default:
      initialState;
  }
};

const CounterApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  return (
    <View style={styles.counterAppWrapper}>
      <View>
        <TouchableOpacity
          style={styles.routeBtn}
          onPress={() => dispatch({ type: "increment", payload: RANGE })}
        >
          <Text style={styles.routeBtnText}>Increase Count by {RANGE}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeBtn}
          onPress={() => dispatch({ type: "decrement", payload: RANGE })}
        >
          <Text style={styles.routeBtnText}>Decrease Count by {RANGE}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeBtn}
          onPress={() => dispatch({ type: "reset", payload: RANGE })}
        >
          <Text style={styles.routeBtnText}>RESET</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.routeBtnText}>Current Count is {count} </Text>
      </View>
    </View>
  );
};

export default CounterApp;

const styles = StyleSheet.create({
  counterAppWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
    width: 250
  },
  routeBtnText: {
    fontSize: 19
  }
});
