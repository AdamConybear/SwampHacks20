import { createStackNavigator, createAppContainer } from 'react-navigation';
import PinScreen from './src/screens/PinScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const navigator = createStackNavigator(
  {
    Login: PinScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Profile',
    defaultNavigationOptions: {
      title: 'App',
      headerLeft: null
    }
  }
);

export default createAppContainer(navigator);
