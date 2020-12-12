import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentScreen from './src/screens/Components/ComponentScreen';
import Home from './src/screens/Home';

const navigator = createStackNavigator(
  {
    Home: Home,
    ComponentScreen: ComponentScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
