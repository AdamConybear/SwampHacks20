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
    initialRouteName: 'Match',
    defaultNavigationOptions: {
      title: 'Confided',
      //headerLeft: null
      headerTintColor: '#26A69A',
      headerBackTitle: 'Back'
    }
  }
);

export default createAppContainer(navigator);
