import React, {Component} from 'react';
import { Text, StyleSheet,View,Vibration} from 'react-native';

export default class MatchedScreen extends Component{
    constructor(){
        super();
        this.state = {
            user: this.props.navigation.state.params.username,
            
        }
    }


    render(){
        return(
            <Text> Matching screen</Text>

        );
    }
}