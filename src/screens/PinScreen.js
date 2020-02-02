
import React, {Component} from 'react';
import { Text, StyleSheet,View,Vibration} from 'react-native';
//import * as Pin from 'react-native-keychain';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export default class PinScreen extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     code: 
  //   }
  // }
  state = {
    code: '',
  };
  pinInput = React.createRef();

  _checkCode = (code) => {
    if (code != '1234') {
      const DURATION = 10000;
      Vibration.vibrate(DURATION);
      this.setState({code:''});
    }else{
      //move on to next screen
      this.props.navigation.navigate('Profile');
    }
  }

  render(){
    const {code} = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Enter Pin</Text>
          <SmoothPinCodeInput password mask = "*"
            cellStyle={{
              borderBottomWidth: 2,
              borderColor: 'gray',
            }}
            cellStyleFocused={{
              borderColor: 'black',
            }}
            value={code}
            codeLength={4}
            onTextChange={code => this.setState({ code })}
            onFulfill={this._checkCode}
            onBackspace={this._focusePrevInput}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    alignItems: 'center',
    margin: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  }
});
