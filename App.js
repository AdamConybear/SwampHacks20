import { createStackNavigator, createAppContainer } from 'react-navigation';
import PinScreen from './src/screens/PinScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MatchedScreen from './src/screens/MatchedScreen';

const navigator = createStackNavigator(
  {
    Login: PinScreen,
    Profile: ProfileScreen,
    Match: MatchedScreen
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
