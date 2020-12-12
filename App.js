import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorBoxGenerator from "./src/screens/Components/ColorBoxGenerator";
import ComponentScreen from "./src/screens/Components/ComponentScreen";
import Home from "./src/screens/Home";

const navigator = createStackNavigator(
  {
    Home: Home,
    ComponentScreen: ComponentScreen,
    ColorBoxGenerator: ColorBoxGenerator
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
