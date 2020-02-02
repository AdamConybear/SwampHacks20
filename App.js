import { createStackNavigator, createAppContainer } from 'react-navigation';
import PinScreen from './src/screens/PinScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MatchedScreen from './src/screens/MatchedScreen';
import MessageScreen from './src/screens/MessageScreen';

const navigator = createStackNavigator(
  {
    Login: PinScreen,
    Profile: ProfileScreen,
    Match: MatchedScreen,
    Messaging: MessageScreen,
  },
  {
    initialRouteName: Profile,
    defaultNavigationOptions: {
      title: 'App',
      headerLeft: null
    }
  }
);

export default createAppContainer(navigator);
