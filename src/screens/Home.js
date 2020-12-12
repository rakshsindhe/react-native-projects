import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = props => {
  const { navigation } = props;
  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.appContainerText}>
          Welcome to React Native Apps
        </Text>
      </View>
      <View style={styles.routeBtnContainer}>
        <TouchableOpacity
          style={styles.routeBtn}
          onPress={() => navigation.navigate("ComponentScreen")}
        >
          <Text style={styles.routeBtnText}>Component Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeBtn}
          onPress={() => navigation.navigate("CounterApp")}
        >
          <Text style={styles.routeBtnText}>Counter App</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeBtn}
          onPress={() => navigation.navigate("ColorBoxGenerator")}
        >
          <Text style={styles.routeBtnText}>Color Box Generator</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  appContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D8F0F2",
    paddingBottom: 16,
    paddingTop: 16
  },
  appContainerText: {
    fontSize: 23
  },
  routeBtnContainer: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  routeBtn: {
    display:"flex",
    alignItems:"center",
    padding: 12,
    borderColor: "#89C2D9",
    borderWidth: 1,
    backgroundColor: "#89C2D9",
    borderRadius: 5,
    marginBottom: 20,
    width: 250
  },
  routeBtnText: {
    fontSize: 18
  }
});
