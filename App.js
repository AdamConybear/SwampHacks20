import { createStackNavigator, createAppContainer } from 'react-navigation';
import PinScreen from './src/screens/PinScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MatchedScreen from './src/screens/MatchedScreen';
import LoginScreen from './src/screens/LoginScreen';
import MessageScreen from './src/screens/MessageScreen';

const navigator = createStackNavigator(
  {
    Pin: PinScreen,
    Profile: ProfileScreen,
    Match: MatchedScreen,
    Login: LoginScreen,
    Chat: MessageScreen,
  },
  {
    initialRouteName: 'Pin',
    defaultNavigationOptions: {
      title: 'Confided',
      //headerLeft: null
      headerTintColor: '#26A69A',
      headerBackTitle: 'Back'
    }
  }
);

export default createAppContainer(navigator);
