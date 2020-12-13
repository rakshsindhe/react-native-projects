import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorBoxGenerator from "./src/screens/Components/ColorBoxGenerator";
import ComponentScreen from "./src/screens/Components/ComponentScreen";
import CounterApp from "./src/screens/Components/CounterApp";
import TextScreen from "./src/screens/Components/Form/TextScreen";
import UserScreen from "./src/screens/Components/Form/UserScreen";
import Home from "./src/screens/Home";

const navigator = createStackNavigator(
  {
    Home: Home,
    ComponentScreen: ComponentScreen,
    ColorBoxGenerator: ColorBoxGenerator,
    CounterApp : CounterApp,
    TextScreen: TextScreen,
    UserScreen : UserScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
